'use strict';

import React from 'react';
import {Router, Route, Link, IndexRoute} from 'react-router';
import App from 'components/layout/app';

// create browser history for navigating
import createBrowserHistory from 'history/lib/createBrowserHistory';
let history = createBrowserHistory();

// dashboard
import notFoundView from 'modules/views/dashboard/not-found';
import dashboardIndexView from 'modules/views/dashboard/index';
import dashboardLoginView from 'modules/views/dashboard/login';
import dashboardRegisterView from 'modules/views/dashboard/register';

// branches
import branchesListView from 'modules/views/branches/list';
import branchesDetailView from 'modules/views/branches/detail';
import branchesEditView from 'modules/views/branches/edit';
import branchesNewView from 'modules/views/branches/new';

export default (
    <Router history={history}>
        <Route component={App} path="/">
            <Route component={dashboardIndexView} path="dashboard" />
            <Route component={dashboardLoginView} path="dashboard/login" />
            <Route component={dashboardRegisterView} path="dashboard/register" />

            <Route component={branchesListView} path="branches" />
            <Route component={branchesDetailView} path="branches/detail/:id" />
            <Route component={branchesEditView} path="branches/edit/:id" />
            <Route component={branchesNewView} path="branches/new" />
            <Route path="*" component={notFoundView}/>
        </Route>
    </Router>
);