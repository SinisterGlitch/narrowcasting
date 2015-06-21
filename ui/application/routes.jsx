var React = require('react');
var ReactRouter = require('react-router');
var DefaultRoute = ReactRouter.DefaultRoute;
var Route = ReactRouter.Route;

var App = require('core/components/layout/app');

var dashboardHandler = require ('core/modules/views/dashboard/dashboard');

var Routes = (
    <Route name="admin">
        <Route name="default" handler={App} path="/" />
        <Route name="login" handler={dashboardHandler} path="/login" />
    </Route>
);

module.exports = Routes;