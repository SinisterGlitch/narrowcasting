'use strict';

import React from 'react';

export default React.createClass({

    propTypes: {
        label: React.PropTypes.string,
        value: React.PropTypes.bool,
        name: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            placeholder: '',
            hideInput: false,
            name: 'test',
            value: 0,
            label: ''
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
                <div className="checkbox">
                    <input type="checkbox"
                        name={this.props.name}
                        key={this.props.name}
                        placeholder={this.props.placeholder}
                        value={(this.state.value) ? this.state.value : ' '}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
});