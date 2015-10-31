'use strict';

import React from 'react';
import Reflux from 'reflux';

import FormMixin from 'mixins/form-mixin';
import Checkbox from 'components/form/checkbox-input';
import TextInput from 'components/form/text-input';
import Submit from 'components/form/submit-button';

import AuthStore from 'components/stores/auth';
import BranchesStore from 'modules/stores/branches';
import BranchesActions from 'modules/actions/branches';

export default React.createClass({

    mixins: [
        Reflux.listenTo(BranchesActions.saveBranches.completed, 'onSave'),
        FormMixin
    ],

    getInitialState() {
        return {
            branch: {
                active: false,
                user: {
                    id: AuthStore.getUser().id
                }
            }
        }
    },

    render(){
        return (
            <div className="content">
                <TextInput label="Name" valueLink={this.linkState('branch.name')} />
                <Checkbox checkedLink={this.linkState('branch.active')} label="Active" />
                <Submit label="Save" onClick={BranchesActions.saveBranches.bind(this, this.state.branch)}/>
            </div>
        )
    }
});