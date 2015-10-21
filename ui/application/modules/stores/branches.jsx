'use strict';

import React from 'react';
import Reflux from'reflux';
import _ from 'lodash';

import BranchesActions from 'modules/actions/branches';

export default Reflux.createStore({
    listenables: BranchesActions,

    /**
     * @var {Array}
     */
    _branches: [],

    /**
     * @param {Array} branches
     */
    loadBranchesCompleted(branches) {
        _.forEach(branches, branch => this._branches[branch.id] = branch);
        this.trigger();
    },

    /**
     * @param {Object} branch
     */
    loadBranchCompleted(branch) {
        this._branches[branch.id] = branch;
        this.trigger();
    },

    /**
     * @return {Array}
     */
    getBranches() {
        return this._branches;
    },

    /**
     * @return {Object}
     */
    getBranch(id) {
        return _.has(this._branches, id) ? this._branches[id] : '';
    }
});