var React = require('react');
var Reflux = require('reflux');
var DashboardRepository = require('modules/repositories/dashboard');

/**
 * Dashboard Reflux actions
 */
var DashboardActions = Reflux.createActions({
    loadDefault: {children: ['completed','failed']}
});

/**
 * Listen to actions
 */
DashboardActions.loadDefault.listen(() => DashboardRepository.default(DashboardActions.loadDefault));

module.exports = DashboardActions;