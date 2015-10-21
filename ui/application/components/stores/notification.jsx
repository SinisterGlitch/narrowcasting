'use strict';

import React from 'react';
import Reflux from 'reflux';
import Storage from 'services/storage';
import NotificationActions from 'components/actions/notification';

export default Reflux.createStore({
    listenables: NotificationActions,

    /**
     * @import {int}
     */
    status: null,

    /**
     * @param {string} status
     */
    onShow(status) {
        this.status = status;
        setTimeout(NotificationActions.hide, 3000);
        this.trigger();
    },

    onHide() {
        this.status = null;
        this.trigger();
    },

    /**
     * @return {int}
     */
    getStatus() {
        return this.status;
    }
});