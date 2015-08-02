var React = require('react');
var Reflux = require('reflux');
var Storage = require('services/storage');
var UserActions = require('modules/actions/user');

module.exports = Reflux.createStore({

    /**
     * User storage
     */
    _user: {},

    /**
     * Event listeners
     */
    init: function() {
        this._user = Storage.read('user', {});
        this.listenTo(UserActions.loadUser.completed, this._onLoadUser);
    },

    /**
     * Load user
     *
     * @param user
     */
    _onLoadUser(user) {
        this._user = user;
        Storage.write('user', this._user);
        this.trigger();
    },

    /**
     * Get user
     */
    getUser() {
        return this._user;
    }
});