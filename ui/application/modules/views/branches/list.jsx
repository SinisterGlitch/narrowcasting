var React = require('react');
var ReactRouter = require('react-router');
var Reflux = require('reflux');
var Link = ReactRouter.Link;


var BranchesStore = require('modules/stores/branches');
var BranchesActions = require('modules/actions/branches');

/**
 * List branches view
 */
module.exports = React.createClass({

    mixins: [
        Reflux.listenTo(BranchesStore, '_onLoadBranches')
    ],

    componentDidMount() {
        BranchesActions.loadBranches()
    },

    getInitialState() {
        return {
            branches: BranchesStore.getBranches()
        }
    },

    _onLoadBranches() {
        this.setState({
            branches: BranchesStore.getBranches()
        });
    },

    render(){
        return (
            <div key="content" key="content">
                {(this.state.branches) ? this.state.branches.map(this.renderRow) : ''}
            </div>
        )
    },

    renderRow(branch) {
        return (
            <div key={branch.id}>
                <div>{branch.name}</div>
                <Link key="detail" to="/branches/:id" params={{id: branch.id}}>detail</Link>
                -
                <Link key="edit" to="/branches/edit/:id" params={{id: branch.id}}>edit</Link>
            </div>
        )
    }
});