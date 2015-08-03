var React = require('react');
var Reflux = require('reflux');
var Request = require('services/request');

/**
 * User Reflux actions
 */
var BranchesActions = Reflux.createActions({
    loadBranch:     {children: ['completed','failed']},
    loadBranches:   {children: ['completed','failed']}
});

BranchesActions.loadBranch.listen((id)
    => Request.get('app_dev.php/api/branches/'+ id, BranchesActions.loadBranch)
);

BranchesActions.loadBranches.listen((data)
    => Request.get('app_dev.php/api/branches', BranchesActions.loadBranches)
);

module.exports = BranchesActions;