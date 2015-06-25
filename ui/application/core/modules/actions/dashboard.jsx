var React = require('react');
var Reflux = require('reflux');
var SuperAgent = require('superagent');

/**
 * Dashboard Reflux actions
 */
var DashboardActions = Reflux.createActions({
    loadDefault: {children: ['completed','failed']}
});

/**
 * Listen to actions
 */
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

module.exports = DashboardActions;