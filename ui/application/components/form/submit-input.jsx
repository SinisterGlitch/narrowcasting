var React = require('react');

/**
 * Text input component
 */
var TextInput = React.createClass({

    /**
     * Validate properties
     */
    propTypes: {
        label: React.PropTypes.string
    },

    /**
     * Default values for properties
     */
    getDefaultProps() {
        return {
            label: ''
        }
    },

    /**
     * Render component
     */
    render() {
        return (
            <div>
                <input type="submit" name={this.props.label} id={this.props.label} />
            </div>
        );
    }
});

module.exports = TextInput;