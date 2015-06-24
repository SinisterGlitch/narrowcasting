var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;

var App = require('core/components/layout/app');
var dashboardHandler = require ('core/modules/views/dashboard/dashboard');

module.exports = (
    <Route name="default" name="home" handler={App} path="/">
        <Route name="login" handler={dashboardHandler} path="/login" />
    </Route>
);