'use strict';

import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import BranchesStore from 'modules/stores/branches';
import BranchesActions from 'modules/actions/branches';

export default React.createClass({

    mixins: [
        Reflux.listenTo(BranchesStore, 'onLoadBranch')
    ],

    componentDidMount() {
        if (_.isEmpty(BranchesStore.getBranch(this.props.params.id))) {
            BranchesActions.loadBranch(this.props.params.id);
        }
    },

    getInitialState() {
        return {
            branch: BranchesStore.getBranch(this.props.params.id)
        }
    },

    onLoadBranch() {
        this.setState({
            branch: BranchesStore.getBranch(this.props.params.id)
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