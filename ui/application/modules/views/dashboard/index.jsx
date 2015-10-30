'use strict';

import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import UserStore from 'modules/stores/user';

export default React.createClass({

    mixins: [
        Reflux.listenTo(UserStore, 'onLoadUser')
    ],

    getInitialState() {
        return {
            user: UserStore.getUser()
        }
    },

    onLoadUser() {
        this.setState({
            user: UserStore.getUser()
        });
    },

    render(){
        return (
            <div key="content">
                <span>Welcome, {this.state.user.username}</span>
                <a onClick={UserStore.onLogout}>logoff</a>
            </div>
        )
    }
});