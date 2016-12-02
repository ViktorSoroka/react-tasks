import React, { Component } from 'react';

import withLocalState from '../../helpers/withLocalState';

import './Tabs.css';


class Tabs extends Component {
    onTabClick = tabIndex => {
        this.props.setTab(tabIndex);
    };

    findCurrentTab() {
        const { tabs, currentTabId } = this.props;

        return tabs.find(tab => tab.id === currentTabId) || tabs[0];
    }

    render() {
        const { tabs } = this.props;

        const currentTab = this.findCurrentTab();

        return (
            <div className="tabs">
                <div className="tabs__titles">
                    {tabs.map(tab =>
                        <button
                            className={"tabs__btn" + (tab.id === currentTab.id ? " is-active" : "")}
                            type="button"
                            onClick={() => this.onTabClick(tab.id)}
                            key={tab.id}>{tab.title}</button>
                    )}
                </div>
                <div className="tabs__content">
                    {currentTab.content}
                </div>
            </div>
        );
    };
}

export default withLocalState('currentTabId', 'setTab', null)(Tabs);
