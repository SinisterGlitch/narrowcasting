var React = require('react');
var ReactRouter = require('react-router');
var Reflux = require('reflux');

var UserActions = require('modules/actions/user');
var UserStore = require('modules/stores/user');

var Form = require('services/form');
var TextInput = require('components/form/text-input');
var Submit = require('components/form/submit-button');

/**
 * Login user view
 */
module.exports = React.createClass({

    mixins: [
        ReactRouter.Navigation,
        Reflux.listenTo(UserActions.loadUser.completed, 'onLogin')
    ],

    getInitialState() {
        return {
            user: {}
        }
    },

    onLoadUser() {
        this.setState({
            user: UserStore.getUser()
        });
    },

    onSubmit(form) {
        UserActions.loadUser(Form.getFormData(form));
    },

    onLogin() {
        this.transitionTo('dashboard-index');
    },

    render(){
        return (
            <div key="content">
                <form onSubmit={this.onSubmit}>
                    <TextInput name="username" label="Username" value="germain" placeholder="..." />
                    <TextInput name="password" label="Password" hideInput={true} value="test" placeholder="..." />
                    <Submit label="Login" name="login" />
                </form>
            </div>
        )
    }
});