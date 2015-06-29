var React = require('react');
var Reflux = require('reflux');

var Form = require('services/form');

var DashboardActions = require('modules/actions/dashboard');
var DashboardStore = require('modules/stores/dashboard');

var TextInput = require('components/form/text-input');
var SubmitInput = require('components/form/submit-input');

/**
 * Dashboard view
 */
module.exports = React.createClass({

    /**
     * Event listeners
     */
    mixins: [
        Reflux.listenTo(DashboardStore, 'initRender')
    ],

    /**
     * When component successfully mounted
     */
    componentDidMount() {
        DashboardActions.loadDefault();
    },

    /**
     * Initiate render by force update
     */
    initRender() {
        this.forceUpdate();
    },

    /**
     * Render view
     */
    render(){
        return (
            <div key="content">
                <form onclick={Form.submit(this)}>
                    <TextInput label="username" />
                    <TextInput label="password" />
                    <SubmitInput label="submit" />
                </form>
            </div>
        )
    }
});