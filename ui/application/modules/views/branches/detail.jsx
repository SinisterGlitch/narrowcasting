var React = require('react');
var ReactRouter = require('react-router');
var Reflux = require('reflux');

var BranchesStore = require('modules/stores/branches');
var BranchesActions = require('modules/actions/branches');

/**
 * Branch details view
 */
module.exports = React.createClass({

    mixins: [
        Reflux.listenTo(BranchesStore, '_onLoadBranch'),
        ReactRouter.Navigation,
        ReactRouter.State
    ],

    componentDidMount() {
        if (!isNaN(this.getParams().id)) {
            BranchesActions.loadBranch(this.getParams().id)
        }
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

    render(){
        return (
            <div key="content">
                {(this.state.branch.id) ? this.state.branch.name+' => '+ this.state.branch.id: 'branch not found'}
            </div>
        )
    }
});