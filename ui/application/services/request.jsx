'use strict';

import SuperAgent from 'superagent';
import NotificationActions from 'components/actions/notification';
import AuthStore from 'modules/stores/auth';

export default {

    /**
     * @param {string} url
     * @param {func} callback
     */
    get(url, callback) {
        SuperAgent.get(url).set('X-API-Key', 'foobar').end(
            (err, res) => this.responseHandler(res, callback)
        );
    },

    /**
     * @param {string} url
     * @param {array} data
     * @param {func} callback
     */
    post(url, data, callback) {
        SuperAgent.post(url, data).set('X-API-Key', 'foobar').end(
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
        response.ok
            ? callback.completed(response.body)
            : callback.failed(response.text);

        NotificationActions.show(response.status);
    }
};