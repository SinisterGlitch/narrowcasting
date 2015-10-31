'use strict';

import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import AuthStore from 'components/stores/auth';

export default React.createClass({

    mixins: [
        Reflux.listenTo(AuthStore, 'onLoadUser')
    ],

    getInitialState() {
        return {
            user: AuthStore.getUser()
        }
    },

    onLoadUser() {
        this.setState({
            user: AuthStore.getUser()
        });
    },

    render(){
        return (
            <div key="content">
                <span>Welcome, {this.state.user.username}</span> |
                <a onClick={AuthStore.onLogout}> logoff</a>
            </div>
        )
    }
});