var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;

var App = require('components/layout/app');
var indexHandler = require ('modules/views/dashboard/index');
var loginHandler = require ('modules/views/dashboard/login');
var registerHandler = require ('modules/views/dashboard/register');

module.exports = (
    <Route name="default" name="home" handler={App} path="/">
        <Route name="index" handler={indexHandler} path="/" />
        <Route name="login" handler={loginHandler} path="/login" />
        <Route name="register" handler={registerHandler} path="/register" />
    </Route>
);