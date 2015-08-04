var React = require('react');
var Reflux = require('reflux');

var UserActions = require('modules/actions/user');
var UserStore = require('modules/stores/user');

var Form = require('services/form');
var TextInput = require('components/form/text-input');
var Submit = require('components/form/submit-button');

/**
 * Register user view
 */
module.exports = React.createClass({

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

    render(){
        return (
            <div key="content">
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