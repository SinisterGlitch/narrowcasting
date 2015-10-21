import React from 'react';
import Reflux from 'reflux';
import Storage from 'services/storage';
import UserActions from 'modules/actions/user';

export default Reflux.createStore({
    listenables: UserActions,

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
    onLoadUser(user) {
        this._user = user;
        Storage.write('user', this._user);
        this.trigger();
    },

    /**
     * @return {Object}
     */
    getUser() {
        return this._user;
    },

    onLogout() {
        this.onLoadUser({});
    }
});