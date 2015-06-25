var React = require('react');
var Reflux = require('reflux');

var DashboardActions = require('core/modules/actions/dashboard');
var DashboardStore = require('core/modules/stores/dashboard');

/**
 * Dashboard view
 */
var DashboardComponent = React.createClass({

    mixins: [
        Reflux.listenTo(DashboardStore, 'test')
    ],

    componentDidMount() {
        DashboardActions.loadDefault();
    },

    test(data) {
        console.log(data);
    },

    render(){
        return <div>test</div>;
    }
});

module.exports = DashboardComponent;