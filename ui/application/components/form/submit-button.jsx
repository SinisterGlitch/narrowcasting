var React = require('react');

/**
 * Submit input component
 */
var TextInput = React.createClass({

    propTypes: {
        label: React.PropTypes.string,
        value: React.PropTypes.string,
        name: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            label: 'Submit',
            value: 'submit',
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
                    key={this.props.name}
                />
            </div>
        );
    }
});

module.exports = TextInput;