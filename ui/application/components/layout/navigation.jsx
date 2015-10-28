'use strict';

import React from 'react';
import { Link } from 'react-router'

export default React.createClass({

    menuItems: [
        {label: 'home', route: '/dashboard'},
        {label: 'branches', route: [
            {label: 'browse', route: '/branches'},
            {label: 'create', route: '/branches/new'}
        ]}
    ],

    loginItems: [
        {label: 'User', route: [
            {label: 'login', route: '/dashboard/login'},
            {label: 'register', route: '/dashboard/register'}
        ]}
    ],

    renderItem(item) {
        if (typeof item.route != 'object') {
            return <li key={item.route}><Link activeClassName="active" to={item.route}>{item.label}</Link></li>
        }

        return (
            <li key={item.label} className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">{item.label}<b className="caret"></b></a>
                <ul className="dropdown-menu">
                    {item.route.map((item) => this.renderItem(item))}
                </ul>
            </li>
        );
    },

    render() {
        return (
            <div id="header" className="navbar navbar-default navbar-static-top">
                <div className="navbar-header">
                    <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                        <i className="icon-reorder"></i>
                    </button>
                    <a className="navbar-brand" href="#">
                        BestCasting
                    </a>
                </div>
                <nav className="collapse navbar-collapse">
                    <ul key="navbar-left" className="nav navbar-nav">
                        {this.menuItems.map((item) => this.renderItem(item))}
                    </ul>
                    <ul key="navbar-right" className="nav navbar-nav pull-right">
                        {this.loginItems.map((item) => this.renderItem(item))}
                    </ul>
                </nav>
            </div>
        );
    }
});