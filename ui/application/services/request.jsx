import SuperAgent from 'superagent';
import NotificationActions from 'components/actions/notification';

/**
 * AJAX Request service
 */
export default {

    /**
     * @param {string} url
     * @param {func} callback
     */
    get(url, callback) {
        SuperAgent.get(url).end(
            (err, res) => this.responseHandler(res, callback)
        );
    },

    /**
     * @param {string} url
     * @param {array} data
     * @param {func} callback
     */
    post(url, data, callback) {
        SuperAgent.post(url, {'data' : data}).end(
            (err, res) => this.responseHandler(res, callback)
        );
    },

    /**
     * @param {string} url
     * @param {array} data
     * @param {func} callback
     */
    put(url, data, callback) {
        SuperAgent.put(url, data).end(
            (err, res) => this.responseHandler(res, callback)
        );
    },

    /**
     * @param {string} url
     * @param {array} data
     * @param {func} callback
     */
    patch(url, data, callback) {
        SuperAgent.patch(url, {'data' : data}).end(
            (err, res) => this.responseHandler(res, callback)
        );
    },

    /**
     * @param {string} url
     * @param {array} data
     * @param {func} callback
     */
    delete(url, data, callback) {
        SuperAgent.del(url, data).end(
            (err, res) => this.responseHandler(res, callback)
        );
    },

    /**
     * @param {object} response
     * @param {func} callback
     */
    responseHandler(response, callback) {
        (response.ok)
            ? callback.completed(response.body)
            : callback.failed(response.text);

        NotificationActions.show((response.ok) ? '' : response.body.error.message, response.ok);
    }
};