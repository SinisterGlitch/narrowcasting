var React = require('react');
var Reflux = require('reflux');
var Storage = require('services/storage');
var NotificationActions = require('components/actions/notification');

module.exports = Reflux.createStore({

    _message: {},

    /**
     * Event listeners
     */
    init: function() {
        this.listenTo(NotificationActions.show, '_onShow');
        this.listenTo(NotificationActions.hide, '_onHide');
    },

    _onShow: function(message) {
        this._setMessage(message);
    },

    _onHide: function() {
        this._unsetNotification();
    },

    _setMessage: function(message) {
        this._message = message;
        this.trigger();
    },

    _unsetNotification: function() {
        this._message = {};
        this.trigger();
    },

    getMessage: function() {
        return this._message;
    }
});