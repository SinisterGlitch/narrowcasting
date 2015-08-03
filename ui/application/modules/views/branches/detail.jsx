var React = require('react');
var ReactRouter = require('react-router');
var Reflux = require('reflux');

var BranchesStore = require('modules/stores/branches');
var BranchesActions = require('modules/actions/branches');

/**
 * Index view
 */
module.exports = React.createClass({

    mixins: [
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

    /**
     * Render view
     */
    render(){
        console.log(this.state.branch);
        return (
            <div key="content">
                {(this.state.branch.id) ? this.state.branch.name : 'branch not found'}
            </div>
        )
    }
});