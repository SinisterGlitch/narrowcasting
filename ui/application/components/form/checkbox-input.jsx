'use strict';

import React from 'react';

export default React.createClass({

    propTypes: {
        label: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        checkedLink: React.PropTypes.shape({
            value: React.PropTypes.bool,
            requestChange: React.PropTypes.func.isRequired
        }).isRequired
    },

    getDefaultProps() {
        return {
            placeholder: '',
            label: ''
        }
    },

    render() {
        return (
            <div className="form-inline">
                <label htmlFor={this.props.label}>
                    {this.props.label}
                </label>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        key={this.props.name}
                        placeholder={this.props.placeholder}
                        checkedLink={this.props.checkedLink}
                        />
                </div>
            </div>
        );
    }
});