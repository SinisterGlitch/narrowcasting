var React = require('react');
var Reflux = require('reflux');
var Request = require('services/request');

/**
 * Dashboard Reflux actions
 */
var DashboardActions = Reflux.createActions({
    loadDefault: {children: ['completed','failed']}
});

/**
 * Listen to actions
 */
DashboardActions.loadDefault.listen(function () {
    Request.get('app_dev.php/api/user/get/3223', DashboardActions.loadDefault);
});

DashboardActions.loadDefault.listen(function (data) {
    Request.post('app_dev.php/api/user/get/3223', DashboardActions.loadDefault, data);
});

module.exports = DashboardActions;