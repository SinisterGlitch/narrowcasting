var React = require('react');
var Reflux = require('reflux');

var BranchesActions = require('modules/actions/branches');

module.exports = Reflux.createStore({

    /**
     * branch storage
     */
    _branch: [],

    /**
     * branches list storage
     */
    _branches: [],

    /**
     * Event listeners
     */
    init: function() {
        this.listenTo(BranchesActions.loadBranch.completed, this._onLoadBranch);
        this.listenTo(BranchesActions.loadBranches.completed, this._onLoadBranches);
    },

    /**
     * Load branches
     *
     * @param branches
     */
    _onLoadBranches(branches) {
        this._branches = branches;
        this.trigger();
    },

    /**
     * Load branch
     *
     * @param branch
     */
    _onLoadBranch(branch) {
        this._branch = branch;
        this.trigger();
    },

    /**
     * Get branches
     */
    getBranches() {
        return this._branches;
    },

    /**
     * Get branches
     */
    getBranch() {
        return this._branch;
    }
});