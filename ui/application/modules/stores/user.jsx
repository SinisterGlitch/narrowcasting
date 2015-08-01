var React = require('react');
var Reflux = require('reflux');
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
        this.listenTo(UserActions.loadUser.completed, this._onLoadUser);
    },

    /**
     * Load user
     *
     * @param user
     */
    _onLoadUser(user) {
        this._user = user;
        this.trigger();
    },

    /**
     * Get user
     */
    getUser() {
        return this._user;
    }
});