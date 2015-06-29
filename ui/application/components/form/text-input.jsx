var React = require('react');

/**
 * Text input component
 */
var TextInput = React.createClass({

    /**
     * Validate properties
     */
    propTypes: {
        placeholder: React.PropTypes.string,
        label: React.PropTypes.string
    },

    /**
     * Default values for properties
     */
    getDefaultProps() {
        return {
            placeholder: false,
            label: ''
        }
    },

    /**
     * Render component
     */
    render() {
        return (
            <div>
                <label for={this.props.label}>{this.props.label}</label>
                <input type="text" name={this.props.label} id={this.props.label} value={this.props.value} />
            </div>
        );
    }
});

module.exports = TextInput;