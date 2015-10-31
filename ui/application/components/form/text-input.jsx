'use strict';

import React from 'react';

export default React.createClass({

    propTypes: {
        label: React.PropTypes.string,
        valueLink: React.PropTypes.shape({
            value: React.PropTypes.string,
            requestChange: React.PropTypes.func.isRequired
        }).isRequired
    },

    getDefaultProps() {
        return {
            hideInput: false,
            label: ''
        }
    },

    render() {
        return (
            <div className="form-inline">
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <input
                    className="form-control"
                    valueLink={this.props.valueLink}
                    defaultValue={this.props.valueLink.value}
                    type={this.props.hideInput ? 'password' : 'text'}
                    />
            </div>
        );
    }
});