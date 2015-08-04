var React = require('react');
var ReactRouter = require('react-router');
var Reflux = require('reflux');

var Form = require('services/form');
var TextInput = require('components/form/text-input');
var Submit = require('components/form/submit-button');


var BranchesStore = require('modules/stores/branches');
var BranchesActions = require('modules/actions/branches');

/**
 * Edit branch view
 */
module.exports = React.createClass({

    mixins: [
        Reflux.listenTo(BranchesActions.saveBranch.completed, 'onSave'),
        Reflux.listenTo(BranchesStore, '_onLoadBranch'),
        ReactRouter.Navigation,
        ReactRouter.State
    ],

    componentDidMount() {
        BranchesActions.loadBranch(this.getParams().id)
    },

    getInitialState() {
        return {
            branch: BranchesStore.getBranch()
        }
    },

    _onLoadBranch() {
        this.setState({
            branch: BranchesStore.getBranch()
        });
    },

    onSubmit(form) {
        BranchesActions.saveBranch(Form.getFormData(form));
    },


    onSave(data) {
        console.log('data', data);
    },

    render(){
        console.log('edit');
        return (
            <div key="content">
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