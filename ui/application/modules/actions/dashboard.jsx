var React = require('react');
var Reflux = require('reflux');
var Request = require('mixins/request');

/**
 * Dashboard Reflux actions
 */
var DashboardActions = Reflux.createActions({
    loadDefault: {children: ['completed','failed']}
});

/**
 * Listen to actions
 */
DashboardActions.loadDefault.listen(
    Request.get('app_dev.php/api/user/get/3223', DashboardActions.loadDefault)
);

module.exports = DashboardActions;