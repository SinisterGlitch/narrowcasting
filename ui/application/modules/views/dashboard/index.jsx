var React = require('react');
var Reflux = require('reflux');

var UserStore = require('modules/stores/user');

/**
 * Index view
 */
module.exports = React.createClass({

    getInitialState() {
        return {
            user: UserStore.getUser()
        }
    },

    /**
     * Render view
     */
    render(){
        return (
            <div key="content">
                {(this.state.user.id) ? 'Welcome, ' + this.state.user.username : 'login to continue'}
            </div>
        )
    }
});