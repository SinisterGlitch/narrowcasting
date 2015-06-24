var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var Routes = require('routes');

/**
 * Assign custom reflux methods to Reflux object
 */
module.exports = function() {
    _.assign(Reflux.ActionMethods, require('core/reflux/action-methods'));
};

/**
 * Build Application
 */
ReactRouter.run(Routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('container'));
});