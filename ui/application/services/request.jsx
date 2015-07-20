var SuperAgent = require('superagent');

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
            (err, res) => this.responseHandler(err, res, callback)
        )
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
            (err, res) => this.responseHandler(err, res, callback)
        )
    },

    /**
     * XHR Response handler
     *
     * @param {object} err
     * @param {object} res
     * @param {func} callback
     */
    responseHandler(err, res, callback) {
        if (res.ok) {
            callback.completed(res.body);
        } else {
            callback.failed(res.text);
        }
    }
};