/**
 * Define repository calls
 */
module.exports = {

    /**
     * Default request
     */
    default() {
        return this.request('app_dev.php/api/user/create/germain/riahi/testemail');
    },

    /**
     * Success response handler
     *
     * @param response
     */
    success(response) {
        return {
            response: response.content,
            status: true
        };
    },

    /**
     * Error response handler
     *
     * @param response
     */
    error(response) {
        return {
            response: response.content,
            status: false
        };
    },

    /**
     * Sends the request
     *
     * @param url
     */
    request(url) {
        var parent = this;
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    parent.success(JSON.parse(xhr.responseText));
                } else {
                    parent.error(xhr.responseText);
                }
            }
        };
        xhr.open('GET', url);
        xhr.send();
    }
};