import React from 'react';

export default function handleErrors(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
        throw new Error('WrappedComponent is not a function.');
    }

    const reactComponentLifeCycleHooks = [
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnMount',
    ];

    const makeErrorMessage = (methodErrorOccurredIn, errMessage) => {
        return `The error occurred in component *${methodErrorOccurredIn}* method: ${errMessage}`;
    };

    class Enhancer extends WrappedComponent {
        constructor(props) {
            try {
                super(props);

                this.state = {
                    isError     : false,
                    errorMessage: ''
                };
            } catch (err) {
                console.error(err);
                document.body.innerHTML = `<div class="error-message">${makeErrorMessage('constructor', err.stack.toString())}</div>`;
                throw new Error('Error in constructor');
            }
        }
    }

    reactComponentLifeCycleHooks.forEach(method => {
        const initialMethod = Enhancer.prototype[method];

        if (initialMethod) {
            Enhancer.prototype[method] = function (...args) {
                try {
                    return initialMethod.call(this, ...args);
                } catch (err) {
                    console.error(err);

                    this.setState({
                        isError     : true,
                        errorMessage: makeErrorMessage(method, err.stack.toString())
                    });
                }
            }
        }
    });

    const originalRender = Enhancer.prototype.render;

    Enhancer.prototype.render = function (...args) {
        const { isError, errorMessage } = this.state;

        // check that error occurred outside `render`
        if (isError) {
            return <div className="error-message">{errorMessage}</div>;
        }

        // check for error in original `render`
        try {
            return originalRender.apply(this, args);
        } catch (err) {
            console.error(err);

            return (
                <div className="error-message">{makeErrorMessage('render', err.stack.toString())}</div>
            );
        }
    };

    return Enhancer;
};
