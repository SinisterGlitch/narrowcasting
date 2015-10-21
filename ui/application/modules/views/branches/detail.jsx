import React from 'react';
import ReactRouter from 'react-router';
import Reflux from 'reflux';
import _ from 'lodash';

import BranchesStore from 'modules/stores/branches';
import BranchesActions from 'modules/actions/branches';

export default React.createClass({

    mixins: [
        Reflux.listenTo(BranchesStore, 'onLoadBranch'),
        ReactRouter.Navigation,
        ReactRouter.State
    ],

    componentDidMount() {
        if (_.isEmpty(BranchesStore.getBranch(this.getParams().id))) {
            BranchesActions.loadBranch(this.getParams().id);
        }
    },

    getInitialState() {
        return {
            branch: BranchesStore.getBranch(this.getParams().id)
        }
    },

    onLoadBranch() {
        this.setState({
            branch: BranchesStore.getBranch(this.getParams().id)
        });
    },

    render(){
        return (
            <div key="content">
                {!_.isEmpty(this.state.branch) ? this.state.branch.id+' | '+this.state.branch.name : ''}
            </div>
        )
    }
});