import React, { Component } from 'react';

import withLocalState from '../../helpers/withLocalState';

import './Tabs.css';


class Tabs extends Component {
    onTabClick = tabIndex => {
        this.props.setTab(tabIndex);
    };

    render() {
        const { currentTab, tabs } = this.props;

        return (
            <div className="tabs">
                <div className="tabs__titles">
                    {tabs.map((tab, index) =>
                        <button
                            className={"tabs__btn" + ((index === +currentTab) ? " is-active" : "")}
                            type="button"
                            onClick={() => this.onTabClick(index)}
                            key={tab.title}>{tab.title}</button>
                    )}
                </div>
                <div className="tabs__content">
                    {tabs[currentTab] ? tabs[currentTab].content : null}
                </div>
            </div>
        );
    };
}

export default withLocalState('currentTab', 'setTab', 0)(Tabs);