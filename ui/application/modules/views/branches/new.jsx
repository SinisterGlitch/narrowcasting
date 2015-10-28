'use strict';

import React from 'react';
import Reflux from 'reflux';

import Form from 'services/form';
import Checkbox from 'components/form/checkbox-input';
import TextInput from 'components/form/text-input';
import Submit from 'components/form/submit-button';

import BranchesStore from 'modules/stores/branches';
import BranchesActions from 'modules/actions/branches';

export default React.createClass({

    mixins: [
        Reflux.listenTo(BranchesActions.saveBranches.completed, 'onSave')
    ],

    getInitialState() {
        return {
            branch: {}
        }
    },

    onSubmit(form) {
        BranchesActions.saveBranches(Form.getFormData(form));
    },

    onSave(data) {
        console.log('data', data);
    },

    render(){
        return (
            <div key="content">
                new
                <form onSubmit={this.onSubmit}>
                    <TextInput name="name" label="Name" />
                    <Checkbox value={false} name="active" label="Active" />
                    <TextInput name="created_at" label="created at" />
                    <TextInput name="updated_at" label="updated at" />
                    <Submit label="Save" name="save" />
                </form>
            </div>
        )
    }
});