'use strict';

import React from 'react';
import Reflux from 'reflux';

import FormMixin from 'mixins/form-mixin'
import AuthActions from 'components/actions/auth';
import AuthStore from 'components/stores/auth';

import TextInput from 'components/form/text-input';
import Submit from 'components/form/submit-button';

export default React.createClass({

    mixins: [
        Reflux.listenTo(AuthActions.loadUser, 'onLogin'),
        FormMixin
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