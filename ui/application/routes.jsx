var React = require('react');
var App = require('components/layout/app');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;

var dashboardIndexView = require ('modules/views/dashboard/index');
var dashboardLoginView = require ('modules/views/dashboard/login');
var dashboardRegisterView = require ('modules/views/dashboard/register');

var branchesListView = require ('modules/views/branches/list');
var branchesDetailView = require ('modules/views/branches/detail');
var branchesEditView = require ('modules/views/branches/edit');
var branchesNewView = require ('modules/views/branches/new');

//<Route path="*" component={NoMatch}/>

module.exports = (
    <Route handler={App} path="/">
        <Route name="dashboard">
            <Route name="dashboard-index" handler={dashboardIndexView} path="/dashboard" />
            <Route name="dashboard-login" handler={dashboardLoginView} path="/dashboard/login" />
            <Route name="dashboard-register" handler={dashboardRegisterView} path="/dashboard/register" />
        </Route>
        <Route name="branches">
            <Route name="branches-list" handler={branchesListView} path="/branches" />
            <Route name="branches-detail" handler={branchesDetailView} path="/branches/:id" />
            <Route name="branches-edit" handler={branchesEditView} path="/branches/edit/:id" />
            <Route name="branches-new" handler={branchesNewView} path="/branches/new" />
        </Route>
    </Route>
);