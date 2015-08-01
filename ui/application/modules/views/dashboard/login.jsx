var React = require('react');
var Reflux = require('reflux');

var UserActions = require('modules/actions/user');
var UserStore = require('modules/stores/user');

var TextInput = require('components/form/text-input');
var Submit = require('components/form/submit-button');

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

    onSubmit(e) {
        console.log('values', e.target.value);
    },

    render(){
        return (
            <div key="content">
                <form>
                    <TextInput name="username" label="Username" value="germain" placeholder="..." />
                    <TextInput name="password" label="Password" hideInput={true} value="test" placeholder="..." />
                    <Submit label="Login" name="login" onClick={this.onSubmit} />
                </form>
            </div>
        )
    }
});