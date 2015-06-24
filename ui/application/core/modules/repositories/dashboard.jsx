var SuperAgent = require('superagent');

/**
 * Define repository calls
 */
module.exports = {

    /**
     * Default request
     */
    default() {
        var data = SuperAgent
            .get('app_dev.php/api/user/create/germain/riahi/testemail')
            .end(function(err, res){
                if (res.ok) {
                    return JSON.stringify(res.body)
                } else {
                    return {error: res.text};
                }
            });
    }
};