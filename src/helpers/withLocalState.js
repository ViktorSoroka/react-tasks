import React, { Component } from 'react';

import storage from './storage';

export default (stateName, updateLocalState, defaultValue) => WrappedComponent => {
    return class extends Component {
        constructor(props) {
            super(props);

            const stateValueFromLS = storage.getItem(stateName);

            if (stateValueFromLS === null) {
                storage.setItem(stateName, defaultValue);
            }

            this.state = {
                stateValue: stateValueFromLS !== null ? stateValueFromLS : defaultValue
            };
        }

        updateLocalState = newStateValue => {
            storage.setItem(stateName, newStateValue);

            this.setState({ stateValue: newStateValue });
        };

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
