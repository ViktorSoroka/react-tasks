import React, { Component } from 'react';

import handleErrors from '../../helpers/handleErrors';

class TestComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // throw new Error('some error #1');
    }

    render() {
        throw new Error('some error #2');

        return (
            <div>Hi I am test, and I am without errors.</div>
        );
    }
}

export default handleErrors(TestComponent);