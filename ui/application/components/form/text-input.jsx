'use strict';

import React from 'react';

export default React.createClass({

    propTypes: {
        label: React.PropTypes.string,
        value: React.PropTypes.string,
        key: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            placeholder: '',
            hideInput: false,
            value:'',
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
            <div className="form-inline">
                <label htmlFor={this.props.label}>
                    {this.props.label}
                </label>
                <input type={(this.props.hideInput) ? 'password' : 'text'}
                       name={this.props.name}
                       key={this.props.name}
                       placeholder={this.props.placeholder}
                       value={(this.state.value) ? this.state.value : ' '}
                       onChange={this.handleChange}
                       className="form-control"
                    />
            </div>
        );
    }
});