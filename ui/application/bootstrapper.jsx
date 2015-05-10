var _ = require('lodash');
var Reflux = require('reflux');

module.exports = function() {
    _.assign(Reflux.ActionMethods, require('core/reflux/action-methods'));
};