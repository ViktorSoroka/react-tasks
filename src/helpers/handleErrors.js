import React, { Component } from 'react';

export default handleErrors = WrappedComponent => {
    return class Enhancer extends React.Component {
        componentWillMount(...args) {
            return super.componentWillMount(...args);
        }

        componentDidMount(...args) {
            return super.componentDidMount(...args);
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
