var SuperAgent = require('superagent');

/**
 * Ajax request object
 */
module.exports = {

    /**
     * Get Request
     *
     * @param url
     * @param callback
     */
    get(url, callback) {
        SuperAgent.get(url).end((err, res) => this.responseHandler(err, res, callback))
    },

    /**
     * Post request
     *
     * @param url
     * @param data
     * @param callback
     */
    post(url, data, callback) {
        SuperAgent.post(url).end((err, res) => this.responseHandler(err, res, callback))
    },

    /**
     * Response handler
     *
     * @param err
     * @param res
     */
    responseHandler(err, res, callback) {
        if (res.ok) {
            callback.completed(res.body);
        } else {
            callback.failed(res.text);
        }
    }
};