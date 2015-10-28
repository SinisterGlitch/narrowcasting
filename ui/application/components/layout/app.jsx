'use strict';

import React from 'react';
import Router from 'react-router';
import Notification from 'components/layout/notification';
import Navigation from 'components/layout/navigation';

export default React.createClass({

    render() {
        return (
            <div>
                <Navigation />
                <Notification/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});