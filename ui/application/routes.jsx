'use strict';

import React from 'react';
import App from 'components/layout/app';
import {Router, Route, Link} from 'react-router';

import dashboardIndexView from 'modules/views/dashboard/index';
import dashboardLoginView from 'modules/views/dashboard/login';
import dashboardRegisterView from 'modules/views/dashboard/register';

import branchesListView from 'modules/views/branches/list';
import branchesDetailView from 'modules/views/branches/detail';
import branchesEditView from 'modules/views/branches/edit';
import branchesNewView from 'modules/views/branches/new';

export default (
    <Router>
        <Route component={App} path="/">
            <Route name="dashboard">
                <Route name="dashboard-index" component={dashboardIndexView} path="dashboard" />
                <Route name="dashboard-login" component={dashboardLoginView} path="dashboard/login" />
                <Route name="dashboard-register" component={dashboardRegisterView} path="dashboard/register" />
            </Route>
            <Route name="branches">
                <Route name="branches-list" component={branchesListView} path="branches" />
                <Route name="branches-detail" component={branchesDetailView} path="branches/detail/:id" />
                <Route name="branches-edit" component={branchesEditView} path="branches/edit/:id" />
                <Route name="branches-new" component={branchesNewView} path="branches/new" />
            </Route>
        </Route>
    </Router>
);