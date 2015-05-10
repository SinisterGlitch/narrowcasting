module.exports = {
    /**
     * Attach handlers to Superagent API promise that trigger the completed and failed
     * child publishers, if available.
     *
     * @param {Object} apiPromise - The promise to attach to
     */
    apiPromise: function(apiPromise) {
        var me = this;

        var canHandlePromise =
            this.children.indexOf('completed') >= 0 &&
            this.children.indexOf('failed') >= 0;

        if (!canHandlePromise){
            throw new Error('Publisher must have "completed" and "failed" child publishers');
        }

        apiPromise.end(function(err, res) {
            var context = {
                request:    apiPromise,
                response:   res,
                error:      err
            };

            if (res.ok) {
                return me.completed(res.body, context);
            } else {
                return me.failed(res.body, context);
            }
        });
    },

    /**
     * Subscribes the given callback for action triggered, which should
     * return a Superagent API promise that in turn is passed to `this.apiPromise`
     *
     * @param {Function} callback - The callback to register as event handler
     * @param {Object} bindContext
     */
    listenAndApiPromise: function(callback, bindContext) {
        var me = this;
        bindContext = bindContext || this;

        return this.listen(function() {

            if (!callback) {
                throw new Error('Expected a function returning a promise but got ' + callback);
            }

            var args = arguments,
                promise = callback.apply(bindContext, args);
            return me.apiPromise.call(me, promise);
        }, bindContext);
    }
};