var React = require('react');
var Reflux = require('reflux');
var Storage = require('services/storage');
var NotificationActions = require('components/actions/notification');

module.exports = Reflux.createStore({

    _message: '',

    _status: '',

    /**
     * Event listeners
     */
    init: function() {
        this.listenTo(NotificationActions.show, '_onShow');
        this.listenTo(NotificationActions.hide, '_onHide');
    },

    _onShow: function(message, status) {
        this._setMessage(message);
        this._setStatus(status);
        this.trigger();
    },

    _onHide: function() {
        this._setMessage('');
        this._setStatus('');
        this.trigger();
    },

    _setStatus: function(status) {
        this._status = status;
    },

    _setMessage: function(message) {
        this._message = message;
    },

    getMessage: function() {
        return this._message;
    },

    getStatus: function() {
        return this._status;
    }
});