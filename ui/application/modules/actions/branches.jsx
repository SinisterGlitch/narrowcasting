'use strict';

import React from 'react';
import Reflux from 'reflux';
import Request from 'services/request';

let BranchesActions = Reflux.createActions({
    saveBranches:   {children: ['completed','failed']},
    updateBranches: {children: ['completed','failed']},
    deleteBranches: {children: ['completed','failed']},
    loadBranches:   {children: ['completed','failed']},
    loadBranch:     {children: ['completed','failed']}
});

BranchesActions.saveBranches.listen(
    data => Request.post('/app_dev.php/api/branches', data, BranchesActions.saveBranches)
);

BranchesActions.updateBranches.listen(
    data => Request.put('/app_dev.php/api/branches', data, BranchesActions.updateBranches)
);

BranchesActions.deleteBranches.listen(
    data => Request.delete('/app_dev.php/api/branches', data, BranchesActions.deleteBranches)
);

BranchesActions.loadBranch.listen(
    id => Request.get('/app_dev.php/api/branches/' + id, BranchesActions.loadBranch)
);

BranchesActions.loadBranches.listen(()
    => Request.get('/app_dev.php/api/branches', BranchesActions.loadBranches)
);

export default BranchesActions;