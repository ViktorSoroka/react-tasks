import React, { Component } from 'react';

import storage from './storage';

export default (stateName, updateLocalState, defaultValue) => WrappedComponent => {
    return class extends Component {
        constructor(props) {
            super(props);

            const stateValueFromLS = storage.getItem(stateName);

            if (!stateValueFromLS) {
                storage.setItem(stateName, defaultValue);
            }

            this.state = {
                stateValue: stateValueFromLS ? stateValueFromLS : defaultValue
            };
        }

        updateLocalState = newStateValue => {
            storage.setItem(stateName, newStateValue);

            this.setState({
                stateValue: newStateValue
            });
        };

        componentWillReceiveProps() {
            let stateValueFromLS = storage.getItem(stateName);

            if (storage.getItem(stateName) === null) {
                return this.setState({
                    stateValue: defaultValue
                });
            }

            if (stateValueFromLS !== this.state.stateValue) {
                this.setState({
                    stateValue: stateValueFromLS
                });
            }
        }

        render() {
            const props = {
                ...this.props,
                [stateName]       : this.state.stateValue,
                [updateLocalState]: this.updateLocalState
            };

            return <WrappedComponent {...props}/>
        }
    }
};
