var _ = require('lodash');
var React = require('react');
var ReactRouter = require('react-router');
var Reflux = require('reflux');

module.exports = function() {
    _.assign(Reflux.ActionMethods, require('core/reflux/action-methods'));
};

var App = require('core/components/layout/app');
var Routes = require('routes');

ReactRouter.run(Routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('container'));
});