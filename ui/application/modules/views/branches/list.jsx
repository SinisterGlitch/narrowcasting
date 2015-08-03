var React = require('react');
var Reflux = require('reflux');

var BranchesStore = require('modules/stores/branches');
var BranchesActions = require('modules/actions/branches');

/**
 * Index view
 */
module.exports = React.createClass({

    mixins: [
        Reflux.listenTo(BranchesStore, '_onLoadBranches')
    ],

    componentDidMount() {

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

    /**
     * Render view
     */
    render(){
        return (
            <div key="content">
                branches
            </div>
        )
    }
});