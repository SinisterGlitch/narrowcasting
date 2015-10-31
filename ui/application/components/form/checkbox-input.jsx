'use strict';

import React from 'react';

export default React.createClass({

    propTypes: {
        label: React.PropTypes.string,
        checkedLink: React.PropTypes.shape({
            value: React.PropTypes.bool,
            requestChange: React.PropTypes.func.isRequired
        }).isRequired
    },

    getDefaultProps() {
        return {
            label: ''
        }
    },

    render() {
        return (
            <div className="input-group">
                <span className="input-group-addon">{this.props.label}</span>
                <div className="form-control">
                    <input
                        checkedLink={this.props.checkedLink}
                        defaultValue={this.props.checkedLink.value}
                        type="checkbox"
                        />
                </div>
            </div>
        );
    }
});