var React = require('react');
var Reflux = require('reflux');
var Request = require('services/request');

/**
 * Branches actions
 */
var BranchesActions = Reflux.createActions({
    saveBranch:     {children: ['completed','failed']},
    loadBranch:     {children: ['completed','failed']},
    loadBranches:   {children: ['completed','failed']}
});

BranchesActions.saveBranch.listen((data)
    => Request.post('app_dev.php/api/branches', data, BranchesActions.saveBranch)
);

BranchesActions.loadBranch.listen((id)
    => Request.get('app_dev.php/api/branches/'+ id, BranchesActions.loadBranch)
);

BranchesActions.loadBranches.listen(()
    => Request.get('app_dev.php/api/branches', BranchesActions.loadBranches)
);

module.exports = BranchesActions;