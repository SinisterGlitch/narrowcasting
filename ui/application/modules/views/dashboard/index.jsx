var React = require('react');
var Reflux = require('reflux');

var UserStore = require('modules/stores/user');

/**
 * Index view
 */
module.exports = React.createClass({

    mixins: [
        Reflux.listenTo(UserStore, 'onLoadUser')
    ],

    getInitialState() {
        return {
            user: UserStore.getUser()
        }
    },

    onLoadUser() {
        this.setState({
            user: UserStore.getUser()
        });
    },

    /**
     * Render view
     */
    render(){
        return (
            <div key="content">
                {(this.state.user.id) ? 'Welcome, ' + this.state.user.username : 'login to continue'}
                <br />
                {(this.state.user.id) ? <a onClick={UserStore.onLogout}>logoff</a> : ''}
            </div>
        )
    }
});