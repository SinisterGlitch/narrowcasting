var React = require('react');
var Reflux = require('reflux');
var SuperAgent = require('superagent');

/**
 * Actions
 */
var DashboardActions = Reflux.createActions({
    loadDefault: {children: ['completed','failed']}
});


DashboardActions.loadDefault.listen( function() {
    SuperAgent
        .get('app_dev.php/api/user/create/germain/riahi/testemail')
        .end(function(err, res){
            if (res.ok) {
                DashboardActions.loadDefault.completed(res.body);
            } else {
                DashboardActions.loadDefault.failed(res.text);
            }
        });
});


/**
 * store
 */
var DashboardStore = Reflux.createStore({
    init: function() {
        this.listenTo(DashboardActions.loadDefault.completed, this.loadDefault);
    },

    loadDefault(data) {
        this.trigger(data);
    }
});


/**
 * Component
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


/**
 * Webpack
 */
module.exports = DashboardComponent, DashboardActions, DashboardStore;
