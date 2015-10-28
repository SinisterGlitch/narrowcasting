'use strict';

import React from 'react';
import { Link } from 'react-router';
import Reflux from 'reflux';
import _ from 'lodash';

import BranchesStore from 'modules/stores/branches';
import BranchesActions from 'modules/actions/branches';

export default React.createClass({

    mixins: [
        Reflux.listenTo(BranchesStore, 'onLoadBranches')
    ],

    componentDidMount() {
        BranchesActions.loadBranches()
    },

    getInitialState() {
        return {
            branches: BranchesStore.getBranches()
        }
    },

    onLoadBranches() {
        this.setState({
            branches: BranchesStore.getBranches()
        });
    },

    render(){
        return (
            <div key="content">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th key="1-1">Name</th>
                        <th key="1-2"></th>
                        <th key="1-3"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {_.map(this.state.branches, this.renderRow)}
                    </tbody>
                </table>
            </div>
        )
    },

    renderRow(branch) {
        if (_.isUndefined(branch)) {
            return;
        }

        return (
            <tr key={branch.id}>
                <td>{branch.name}</td>
                <td><Link key="detail" to={'/branches/detail/'+branch.id}>detail</Link></td>
                <td><Link key="edit" to={'/branches/edit/'+branch.id}>edit</Link></td>
            </tr>
        );
    }
});