var React = require('react');
var Reflux = require('reflux');
var NotificationStore = require('components/stores/notification');

/**
 * Notification component
 */
module.exports = React.createClass({

    mixins: [
        Reflux.listenTo(NotificationStore, 'forceUpdate')
    ],

    render() {
        if (NotificationStore.getMessage()) {
            return (
                <div className={NotificationStore.getStatus() ? 'alert alert-success' : 'alert alert-danger'}>
                    {NotificationStore.getMessage()}
                </div>
            );
        }

        return (<div/>);
    }
});