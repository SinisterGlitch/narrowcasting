var React = require('react');
var ReactRouter = require('react-router');
var Routes = require('routes');

/**
 * Build Application
 */
ReactRouter.run(Routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('container'));
});