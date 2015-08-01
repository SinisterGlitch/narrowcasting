var React = require('react');

/**
 * Submit input component
 */
var TextInput = React.createClass({

    propTypes: {
        label: React.PropTypes.string,
        name: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            label: 'Submit',
            name: ''
        }
    },

    render() {
        return (
            <div>
                <input {...this.props}
                    type="submit"
                    value={this.props.label}
                    name={this.props.name}
                    id={this.props.name}
                />
            </div>
        );
    }
});

module.exports = TextInput;