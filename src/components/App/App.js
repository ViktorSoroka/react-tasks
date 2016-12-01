import React, { Component } from 'react';

import Tabs from '../Tabs/Tabs';
import storage from '../../helpers/storage';

import logo from '../../logo.svg';
import './App.css';

export default class App extends Component {
    state = {
        tabs: [
            { title: "Monday", content: "Monday Content" },
            { title: "Tuesday", content: "Tuesday Content" },
            { title: "Thursday", content: "Thursday Content" }
        ],
        randomValue: 0
    };

    changeRandom = () => {
        //remove previously saved value
        storage.removeItem('currentTab');
        this.setState({
            randomValue: Math.floor(Math.random() * 10) + 1
        })
    };

    render () {
        return (
            <div className="app">
                <div className="app-header">
                    <img src={logo} className="app-header__logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p>This button is here for showing that *withLocalState* observes changes in LS after some state changed.</p>
                <button type="button" onClick={this.changeRandom}>Change some state!!!</button>
                <Tabs tabs={this.state.tabs}/>
            </div>
        );
    }
}
