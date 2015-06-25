var SuperAgent = require('superagent');
var DashboardActions = require('core/modules/actions/dashboard');

/**
 * Define repository calls
 */
module.exports = {

    /**
     * Default request
     */
    default() {
        return SuperAgent
            .get('app_dev.php/api/user/create/germain/riahi/testemail')
            .end();
    }
};