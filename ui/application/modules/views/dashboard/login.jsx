'use strict';

import React from 'react';
import LinkedStateMixin from 'react/lib/LinkedStateMixin';
import {Router} from 'react-router';
import Reflux from 'reflux';

import AuthActions from 'components/actions/auth';
import AuthStore from 'components/stores/auth';

import TextInput from 'components/form/text-input';
import Submit from 'components/form/submit-button';

export default React.createClass({

    mixins: [
        Reflux.listenTo(AuthActions.loadUser.completed, 'onLogin'),
        LinkedStateMixin
    ],

    getInitialState() {
        return {
            user: {}
        }
    },

    onLogin() {
        this.props.history.pushState('/dashboard');
    },

    render(){
        return (
            <div className="content">
                <TextInput label="Username" valueLink={this.linkState('user.username')} />
                <br/>
                <TextInput label="Password" hideInput={true} valueLink={this.linkState('user.password')} />
                <br/>
                <Submit value="login" onClick={AuthActions.loadUser.bind(this, this.state.user)} />
            </div>
        )
    }
});