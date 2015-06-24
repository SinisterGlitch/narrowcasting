var Router = require('js_router');
var Superagent = require('superagent');
var ApiActions = require('core/actions/api-actions');
var NotificationActions = require('core/actions/notification-actions');

// resolve circular dependency:
// AuthStore -> AuthActions -> AuthRepository -> ApiClient
var AuthStore = function() {
    return require('core/stores/auth-store');
};

module.exports = {
    /**
     * Create a promise for a GET request
     *
     * @param {string} route
     * @param {Object.<string, string>} routeParams
     * @returns {*}
     */
    get: function(route, routeParams) {
        var url = Router.generate(route, routeParams);

        return Superagent
                    .get(url)
                    .use(this._addDefaults.bind(this));
    },

    /**
     * Create a promise for a POST request
     *
     * @param {string} route
     * @param {Object.<string, string>} routeParams
     * @param {Object.<string, string>} data
     * @returns {*}
     */
    post: function(route, routeParams, data) {
        var url = Router.generate(route, routeParams);

        return Superagent
                    .post(url, data)
                    .use(this._addDefaults.bind(this));
    },

    /**
     * Private function to add default request information to the promise
     *
     * @param promise
     * @private
     */
    _addDefaults: function(promise) {
        promise
            .set('x-api-token', AuthStore().getToken())
            .set('Accept', 'application/json');

        // overwrite the original callback handler with a new one,
        // which checks for the response status
        // and invokes the failure callbacks if necessary
        var origCallback = promise.callback.bind(promise);

        promise.callback = function(err, res) {
            this._responseHandler(err, res);
            origCallback(err, res)
        }.bind(this);

        promise.on('request', this._requestHandler.bind(this));

        return promise;
    },

    /**
     * Handler triggered just before the SuperAgent request is applied
     *
     * @param {Request} req
     * @private
     */
    _requestHandler: function(req) {
        ApiActions.start(req);
    },

    /**
     * Handler triggered after the SuperAgent request has finished, but before the .end() callback is applied
     *
     * @param {undefined|Error} err
     * @param {Response} res
     * @private
     */
    _responseHandler: function(err, res) {
        ApiActions.end(err, res);

        if (_.has(res.headers, 'x-debug-token-link')) {
            var debugUrl = window.location.origin + res.headers['x-debug-token-link'];
            var reqUrl = window.location.origin + res.req.url;
            console.log('Request to ' + reqUrl + ' responded with a ' + res.status + ' status code. See ' + debugUrl + ' for debug information.')
        }
    }
};