'use strict';

import React from 'react';
import ReactRouter from 'react-router';
import Reflux from 'reflux';

import Form from 'services/form';
import TextInput from 'components/form/text-input';
import Checkbox from 'components/form/checkbox-input';
import Submit from 'components/form/submit-button';

import BranchesStore from 'modules/stores/branches';
import BranchesActions from 'modules/actions/branches';

export default React.createClass({

    mixins: [
        Reflux.listenTo(BranchesStore, 'onLoadBranch'),
        ReactRouter.Navigation,
        ReactRouter.State
    ],

    componentDidMount() {
        BranchesActions.loadBranch(this.getParams().id)
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

    onSubmit(form) {
        BranchesActions.updateBranches(Form.getFormData(form));
    },

    render(){
        if (isNaN(this.state.branch.id)) {
            return <div>wait</div>
        }

        return (
            <div key="content">
                <form onSubmit={this.onSubmit}>
                    <input key="hidden" type="hidden" name="id" value={this.state.branch.id} />
                    <TextInput key="name" name="name" label="Name" value={this.state.branch.name} />
                    <Checkbox key="active" name="active" label="Active" value={this.state.branch.active} />
                    <TextInput key="created_at" name="created_at" label="created at" value={this.state.branch.created_at} />
                    <TextInput key="updated_at" name="updated_at" label="updated at" value={this.state.branch.updated_at} />
                    <Submit key="save" label="Save" name="save" />
                </form>
            </div>
        )
    }
});