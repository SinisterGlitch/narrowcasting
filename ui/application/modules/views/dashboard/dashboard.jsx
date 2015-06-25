var React = require('react');
var Reflux = require('reflux');

var DashboardActions = require('modules/actions/dashboard');
var DashboardStore = require('modules/stores/dashboard');

/**
 * Dashboard view
 */
module.exports = React.createClass({

    /**
     * Event listeners
     */
    mixins: [
        Reflux.listenTo(DashboardStore, 'initRender')
    ],

    /**
     * When component successfully mounted
     */
    componentDidMount() {
        DashboardActions.loadDefault();
    },

    /**
     * Initiate render by force update
     */
    initRender() {
        this.forceUpdate();
    },

    /**
     * Render view
     */
    render(){
        return <div key="test">{DashboardStore.getDefaultData()}</div>;
    }
});