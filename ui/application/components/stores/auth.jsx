'use strict';

import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import Storage from 'services/storage';
import AuthActions from 'components/actions/auth';

export default Reflux.createStore({
    listenables: AuthActions,

    /**
     * @var {Object}
     */
    _user: {},

    init() {
        this._user = Storage.read('user', {});
    },

    /**
     * @param {Object} user
     */
    loadUserCompleted(user) {
        this._user = user;
        Storage.write('user', this._user);
        this.trigger();
    },

    /**
     * @param {Object} user
     */
    unLoadUser(user) {
        this._user = {};
        Storage.clear('user');
        this.trigger();
    },

    /**
     * @return {Object}
     */
    getUser() {
        return this._user;
    },

    /**
     * @return {String}
     */
    getToken() {
        return _.has(this._user, 'token') ? this._user.token : null;
    },

    onLogout() {
        this.onLoadUser({});
    }
});