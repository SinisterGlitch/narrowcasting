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
        Reflux.listenTo(UserActions.postUser.completed, 'onRegister')
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
        UserActions.postUser(Form.getFormData(form));
    },

    onRegister() {
        this.transitionTo('dashboard-index');
    },

    render(){
        return (
            <div class="test" key="row">
                <form onSubmit={this.onSubmit}>
                    <TextInput key="username" name="username" label="Username" value="germain" placeholder="..." />
                    <TextInput key="password" name="password" label="Password" hideInput={true} value="test" placeholder="..." />
                    <TextInput key="email" name="email" label="Email" value="test" placeholder="..." />
                    <Submit label="Login" name="login" />
                </form>
            </div>
        )
    }
});