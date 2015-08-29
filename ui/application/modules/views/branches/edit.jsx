var React = require('react');
var ReactRouter = require('react-router');
var Reflux = require('reflux');

var Form = require('services/form');
var TextInput = require('components/form/text-input');
var Checkbox = require('components/form/checkbox-input');
var Submit = require('components/form/submit-button');


var BranchesStore = require('modules/stores/branches');
var BranchesActions = require('modules/actions/branches');

/**
 * Edit branch view
 */
module.exports = React.createClass({

    mixins: [
        Reflux.listenTo(BranchesActions.saveBranches.completed, 'onSave'),
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
        BranchesActions.saveBranches(Form.getFormData(form));
    },

    onSave(data) {
        console.log('data', data);
    },

    render(){
        if (!isNaN(this.state.branch.id)) {
            return (
                <div key="content">
                    edit
                    <form onSubmit={this.onSubmit}>
                        <TextInput name="name" label="Name" value={this.state.branch.name} />
                        <Checkbox name="active" label="Active" value={this.state.branch.active} />
                        <TextInput name="created_at" label="created at" value={this.state.branch.created_at} />
                        <TextInput name="updated_at" label="updated at" value={this.state.branch.updated_at} />
                        <Submit label="Save" name="save" />
                    </form>
                </div>
            )
        }
        return (<div>wait</div>)
    }
});