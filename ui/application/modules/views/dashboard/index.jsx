'use strict';

import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import AuthStore from 'components/stores/auth';
import AuthActions from 'components/actions/auth';

export default React.createClass({

    mixins: [
        Reflux.listenTo(AuthStore, 'onLoadUser'),
        Reflux.listenTo(AuthActions.unLoadUser, 'onLogoff')
    ],

    getInitialState() {
        return {
            user: AuthStore.getUser()
        }
    },

    onLogoff() {
        this.props.history.pushState('/dashboard/login');
    },

    onLoadUser() {
        this.setState({
            user: AuthStore.getUser()
        });
    },

    render(){
        return (
            <div className="content">
                <span>Welcome, {this.state.user.username}</span> |
                <a onClick={AuthActions.unLoadUser}> logoff</a>
            </div>
        )
    }
});