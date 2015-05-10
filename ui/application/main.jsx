var _ = require('lodash');
var React = require('react');
var ReactRouter = require('react-router');
var Bootstrapper = require('bootstrapper');

Bootstrapper();

// Set up application
var App = require('core/components/layout/app');
var Routes = require('routes');

// Run the react router
ReactRouter.run(Routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('container'));
});