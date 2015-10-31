'use strict';

import React from 'react';
import Reflux from 'reflux';

import FormMixin from 'mixins/form-mixin';
import TextInput from 'components/form/text-input';
import Checkbox from 'components/form/checkbox-input';
import Submit from 'components/form/submit-button';

import BranchesStore from 'modules/stores/branches';
import BranchesActions from 'modules/actions/branches';

export default React.createClass({

    mixins: [
        FormMixin,
        Reflux.listenTo(BranchesStore, 'onLoadBranch')
    ],

    componentDidMount() {
        BranchesActions.loadBranch(this.props.params.id)
    },

    getInitialState() {
        return {
            branch: {}
        };
    },

    onLoadBranch() {
        this.setState({
            branch: BranchesStore.getBranch(this.props.params.id)
        });
    },

    onSubmit() {
        BranchesActions.updateBranches(this.state.branch);
    },

    render(){
        return (
            <div key="content">
                <TextInput label="Name" valueLink={this.linkState('branch.name')} />
                <br/>
                <Checkbox label="Active" checkedLink={this.linkState('branch.active')} />
                <br/>
                <Submit value="Save" onClick={this.onSubmit} />
            </div>
        );
    }
});