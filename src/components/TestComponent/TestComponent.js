import React, { Component } from 'react';

import handleErrors from '../../helpers/handleErrors';

class TestComponent extends Component {
    render() {
        return (
            <div>Hi I am test</div>
        );
    }
}

export default handleErrors(TestComponent);