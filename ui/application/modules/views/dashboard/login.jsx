'use strict';

import React from 'react';
import LinkedStateMixin from 'react/lib/LinkedStateMixin';
import {Router} from 'react-router';
import Reflux from 'reflux';

import AuthActions from 'modules/actions/auth';
import AuthStore from 'modules/stores/auth';

import FormMixin from 'mixins/form';
import TextInput from 'components/form/text-input';
import Submit from 'components/form/submit-button';

export default React.createClass({

    mixins: [
        Reflux.listenTo(AuthActions.loadUser.completed, 'onLogin'),
        LinkedStateMixin,
        FormMixin
    ],

    getInitialState() {
        return {
            user: {}
        }
    },

    onSubmit(form) {
        AuthActions.loadUser(this.getFormData(form));
    },

    onLogin() {
        this.props.history.pushState('/dashboard');
    },

    render(){
        console.log(this.state.user);
        return (
            <div key="content">
                <form onSubmit={this.onSubmit}>
                    <TextInput name="username" label="Username" valueLink={this.linkState('user')} />
                    <TextInput name="password" label="Password" hideInput={true} valueLink={this.linkState('user')} />
                    <Submit label="Login" name="login" />
                </form>
            </div>
        )
    }
});