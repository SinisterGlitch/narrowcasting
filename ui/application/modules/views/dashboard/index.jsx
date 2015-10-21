import React from 'react';
import Reflux from 'reflux';

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
                {(this.state.user.id) ? 'Welcome, ' + this.state.user.username : 'login to continue'}
                <br />
                {(this.state.user.id) ? <a onClick={UserStore.onLogout}>logoff</a> : ''}
            </div>
        )
    }
});