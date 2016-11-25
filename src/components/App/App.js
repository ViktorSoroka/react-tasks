import React from 'react';

import logo from '../../logo.svg';
import './App.css';

const App = () => (
    <div className="app">
        <div className="app-header">
            <img src={logo} className="app-header__logo" alt="logo"/>
            <h2>Welcome to React</h2>
        </div>
        Let`s go
    </div>
);

export default App;