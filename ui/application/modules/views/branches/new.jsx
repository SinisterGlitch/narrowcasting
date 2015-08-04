var React = require('react');
var Reflux = require('reflux');

var Form = require('services/form');
var TextInput = require('components/form/text-input');
var Submit = require('components/form/submit-button');

var BranchesStore = require('modules/stores/branches');
var BranchesActions = require('modules/actions/branches');

/**
 * New branch view
 */
module.exports = React.createClass({

    mixins: [
        Reflux.listenTo(BranchesActions.saveBranch.completed, 'onSave')
    ],

    getInitialState() {
        return {
            branch: {}
        }
    },

    onSubmit(form) {
        BranchesActions.saveBranch(Form.getFormData(form));
    },

    onSave(data) {
        console.log('data', data);
    },

    render(){
        return (
            <div key="content">
                new
                <form onSubmit={this.onSubmit}>
                    <TextInput name="active" label="Active" value="" />
                    <TextInput name="name" label="Name" value="" />
                    <TextInput name="created_at" label="created at" value="" />
                    <TextInput name="updated_at" label="updated at" value="" />
                    <Submit label="Save" name="save" />
                </form>
            </div>
        )
    }
});