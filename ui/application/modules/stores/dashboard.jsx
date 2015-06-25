var React = require('react');
var Reflux = require('reflux');
var DashboardActions = require('modules/actions/dashboard');

module.exports = Reflux.createStore({

    /**
     * Default data storage
     */
    defaultData: {},

    /**
     * Event listeners
     */
    init: function() {
        this.listenTo(DashboardActions.loadDefault.completed, this.onLoadDefault);
    },

    /**
     * Load default data
     *
     * @param data
     */
    onLoadDefault(data) {
        this.defaultData = data;
        this.trigger();
    },

    /**
     * Get default data
     *
     * @returns {*}
     */
    getDefaultData() {
        return this.defaultData;
    }
});