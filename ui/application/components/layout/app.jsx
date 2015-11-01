'use strict';

import React from 'react';
import {Redirect} from 'react-router';
import Notification from 'components/layout/notification';
import Navigation from 'components/layout/navigation';
import AuthStore from 'components/stores/auth';

export default React.createClass({

    componentDidMount() {
        this.hasAccess();
    },

    componentWillUpdate() {
        this.hasAccess();
    },

    hasAccess() {
        if (!AuthStore.getToken() && !this.props.history.isActive('/dashboard/login')) {
            this.props.history.pushState(null, '/dashboard/login');
        }
    },

    render() {
        return (
            <div>
                <Navigation />
                <Notification/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});