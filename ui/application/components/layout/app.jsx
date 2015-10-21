'use strict';

import React from 'react';
import ReactRouter from 'react-router';
let RouteHandler = ReactRouter.RouteHandler;

import Notification from 'components/layout/notification';
import Navigation from 'components/layout/navigation';

export default React.createClass({

    render() {
        return (
            <div>
                <Navigation />
                <Notification/>
                <div className="container">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});