var SuperAgent = require('superagent');
var DashboardActions = require('modules/actions/dashboard');

/**
 * Define repository calls
 */
module.exports = {

    /**
     * TODO: fix callback hack and mixin/service superagent
     *
     * Default request
     */
    default(callback) {
        SuperAgent
            .get('app_dev.php/api/user/get/33')
            .end(function(err, res){
                if (res.ok) {
                    callback.completed(JSON.stringify(res.body));
                } else {
                    callback.failed(JSON.stringify(res.text));
                }
            });
        }
};