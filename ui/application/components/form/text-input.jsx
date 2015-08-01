var React = require('react');

/**
 * Text input component
 */
module.exports = React.createClass({

    propTypes: {
        placeholder: React.PropTypes.string,
        hideInput: React.PropTypes.string,
        label: React.PropTypes.string,
        value: React.PropTypes.string,
        name: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            placeholder: false,
            hideInput: false,
            label: '',
            name: ''
        }
    },

    getInitialState() {
        return {
            value: this.props.value
        }
    },

    handleChange(e) {
        this.setState({value: e.target.value});
    },

    render() {
        return (
            <div>
                <label htmlFor={this.props.label}>
                    {this.props.label}
                </label>

                <input type={(this.props.hideInput) ? 'password' : 'text'}
                    name={this.props.name}
                    id={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
});