import React from 'react';
import App from 'components/layout/app';
import ReactRouter from 'react-router';
let Route = ReactRouter.Route;

import dashboardIndexView from 'modules/views/dashboard/index';
import dashboardLoginView from 'modules/views/dashboard/login';
import dashboardRegisterView from 'modules/views/dashboard/register';

import branchesListView from 'modules/views/branches/list';
import branchesDetailView from 'modules/views/branches/detail';
import branchesEditView from 'modules/views/branches/edit';
import branchesNewView from 'modules/views/branches/new';

export default (
    <Route handler={App} path="/">
        <Route name="dashboard">
            <Route name="dashboard-index" handler={dashboardIndexView} path="/dashboard" />
            <Route name="dashboard-login" handler={dashboardLoginView} path="/dashboard/login" />
            <Route name="dashboard-register" handler={dashboardRegisterView} path="/dashboard/register" />
        </Route>
        <Route name="branches">
            <Route name="branches-list" handler={branchesListView} path="/branches" />
            <Route name="branches-detail" handler={branchesDetailView} path="/branches/detail/:id" />
            <Route name="branches-edit" handler={branchesEditView} path="/branches/edit/:id" />
            <Route name="branches-new" handler={branchesNewView} path="/branches/new" />
        </Route>
    </Route>
);