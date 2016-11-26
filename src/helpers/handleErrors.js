import React from 'react';

export default function handleErrors(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
        componentWillMount(...args) {
            return super.componentWillMount(...args);
        }

        componentDidMount(...args) {
            return super.componentDidMount(...args);
        }

        componentWillUpdate(...args) {
            return super.componentWillUpdate(...args);
        }

        componentWillUnMount(...args) {
            return super.componentWillUnMount(...args);
        }

        componentDidUnMount(...args) {
            return super.componentDidUnMount(...args);
        }

        componentWillReceiveProps(...args) {
            return super.componentWillReceiveProps(...args);
        }

        shouldComponentUpdate(...args) {
            return super.shouldComponentUpdate(...args);
        }

        render(...args) {
            return super.render(...args);
        }
    };
};
