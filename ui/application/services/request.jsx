var SuperAgent = require('superagent');
var NotificationActions = require('components/actions/notification');

/**
 * XHR Request service
 */
module.exports = {

    /**
     * Initiate GET Request
     *
     * @param {string} url
     * @param {func} callback
     */
    get(url, callback) {
        SuperAgent.get(url).end(
            (err, res) => this.responseHandler(res, callback)
        );
    },

    /**
     * Initiate POST request
     *
     * @param {string} url
     * @param {array} data
     * @param {func} callback
     */
    post(url, data, callback) {
        SuperAgent.post(url, data).end(
            (err, res) => this.responseHandler(res, callback)
        )
    },

    /**
     * XHR Response handler
     *
     * @param {object} response
     * @param {func} callback
     */
    responseHandler(response, callback) {
        if (response.ok) {
            callback.completed(response.body);
        } else {
            callback.failed(response.text);
        }

        NotificationActions.show(response.body, response.status);
    }
};