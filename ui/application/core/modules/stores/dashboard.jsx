var React = require('react');
var Reflux = require('reflux');
var DashboardActions = require('core/modules/actions/dashboard');

module.exports = Reflux.createStore({

    init: function() {
        this.listenTo(DashboardActions.loadDefault.completed, this.loadDefault);
    },

    loadDefault(data) {
        this.trigger(data);
    }
});