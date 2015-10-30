'use strict';

import React from 'react';
import Reflux from 'reflux';
import NotificationStore from 'components/stores/notification';
import NotificationActions from 'components/actions/notification';

export default React.createClass({

    mixins: [
        Reflux.listenTo(NotificationStore, 'forceUpdate')
    ],

    getMessage() {
        let status = NotificationStore.getStatus();

        if (status >= 400 && status < 500) {
            return 'error';
        } else if (status >= 200 && status < 300) {
            return 'success';
        }
    },

    getClassName() {
        let status = NotificationStore.getStatus();

        if (status >= 400 && status < 500) {
            return 'alert alert-danger';
        } else if (status >= 200 && status < 300) {
            return 'alert alert-success';
        }
    },

    render() {
        return (
            <div onClick={NotificationActions.hide}
                 style={{cursor:'pointer', display: !(NotificationStore.getStatus()) ? 'none' : 'block'}}
                 className={this.getClassName()}>
                    {this.getMessage()}
            </div>
        );
    }
});