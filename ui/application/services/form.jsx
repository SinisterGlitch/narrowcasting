/**
 * Form service
 */
export default {

    /**
     * Get input values from form
     */
    getFormData(e) {
        e.preventDefault();

        var list = {};
        for (var i = 0, len = e.target.length; i < len; i++) {
            if (typeof e.target[i].value != 'undefined' && e.target[i].type != 'submit') {
                list[e.target[i].name] = e.target[i].value;
            }
        }

        return list;
    }
};