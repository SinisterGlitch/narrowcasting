// vendor
var React = require('react');
var ReactRouter = require('react-router');
var Reflux = require('reflux');

// module
var UserActions = require('modules/actions/user');
var UserStore = require('modules/stores/user');

// components
var Form = require('services/form');
var TextInput = require('components/form/text-input');
var Submit = require('components/form/submit-button');

/**
 * Register user view
 */
module.exports = React.createClass({

    mixins: [
        ReactRouter.Navigation,
        Reflux.listenTo(UserActions.postUser.completed, 'onRegister')
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
        UserActions.postUser(Form.getFormData(form));
    },

    onRegister() {
        this.transitionTo('dashboard-index');
    },

    render(){
        return (
            <div class="test" key="row">
                <form onSubmit={this.onSubmit}>
                    <TextInput name="username" label="Username" value="germain" placeholder="..." />
                    <TextInput name="password" label="Password" hideInput={true} value="test" placeholder="..." />
                    <TextInput name="email" label="Email" value="test" placeholder="..." />
                    <Submit label="Login" name="login" />
                </form>
            </div>
        )
    }
});