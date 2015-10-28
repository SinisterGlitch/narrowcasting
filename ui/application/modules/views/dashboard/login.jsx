'use strict';

import React from 'react';
import ReactRouter from 'react-router';
import Reflux from 'reflux';

import UserActions from 'modules/actions/user';
import UserStore from 'modules/stores/user';

import Form from 'services/form';
import TextInput from 'components/form/text-input';
import Submit from 'components/form/submit-button';

export default React.createClass({

    mixins: [
        ReactRouter.Navigation,
        Reflux.listenTo(UserActions.loadUser.completed, 'onLogin')
    ],

    getInitialState() {
        return {
            user: {}
        }
    },

    onLoadUser() {
        this.setState({
            user: UserStore.getUser()
        });
    },

    onSubmit(form) {
        UserActions.loadUser(Form.getFormData(form));
    },

    onLogin() {
        this.transitionTo('dashboard-index');
    },

    render(){
        return (
            <div key="content">
                <form onSubmit={this.onSubmit}>
                    <TextInput key="username" name="username" label="Username" value="germain" placeholder="..." />
                    <TextInput key="password" name="password" label="Password" hideInput={true} value="test" placeholder="..." />
                    <Submit label="Login" name="login" />
                </form>
            </div>
        )
    }
});