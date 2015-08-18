var React = require('react');
var Reflux = require('reflux');
var NotificationStore = require('components/stores/notification');

/**
 * Notification component
 */
module.exports = React.createClass({

    mixins: [
        Reflux.listenTo(NotificationStore, '_onLoadMessage')
    ],

    getInitialState() {
        return {
            message: NotificationStore.getMessage()
        };
    },

    _onLoadMessage() {
        this.setState({
            message: NotificationStore.getMessage()
        });
    },

    _onLoad() {
      return (
          <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                  60%
              </div>
          </div>
      );
    },

    render() {
        if (typeof this.state.message != 'undefined') {
            return (
                <div className={(typeof this.state.message.status == 'undefined') ? 'alert alert-success' : 'alert alert-danger'}>
                    notification message
                </div>
            );
        }

        return (<div/>);
    }
});