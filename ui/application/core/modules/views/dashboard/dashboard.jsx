var React = require('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');

var DashboardActions = require('core/modules/actions/dashboard');
var DashboardStore = require('core/modules/stores/dashboard');

/**
 * Dashboard view
 */
class View extends React.Component {

    /**
     * Constructor
     */
    constructor() {
        DashboardActions.loadDefault();
        Reflux.listenTo(DashboardStore, 'onLoadDefaultData');
    }

    /**
     * Onload default data
     *
     * @param data
     */
    onLoadDefaultData(data) {
        console.log('defaultData', data);
        this.forceUpdate();
    }

    /**
     * Render view
     */
    render(){
        console.log('render', DashboardStore.getDefaultData);
        return (
            <div>
                {DashboardStore.getDefaultData}
            </div>
        );
    }
}

module.exports = View;