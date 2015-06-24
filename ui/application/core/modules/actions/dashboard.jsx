var Reflux = require('reflux');
var DashboardRepository = require('core/modules/repositories/dashboard');

/**
 * Dashboard Reflux actions
 */
var DashboardActions = Reflux.createActions({

    /**
     * Define actions
     */
    loadDefault: {
        children: ['completed','failed'],
        asyncResult: true
    }
});

/**
 * Listen to actions
 */
DashboardActions.loadDefault.listenAndPromise(DashboardRepository.default, DashboardRepository);


module.exports = DashboardActions;