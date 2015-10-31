'use strict';

import React from 'react';

export default React.createClass({

    propTypes: {
        value: React.PropTypes.string.isRequired
    },

    getDefaultProps() {
        return {
            value: ''
        }
    },

    render() {
        return (
            <div>
                <input className="btn btn-default" type="button" {...this.props} />
            </div>
        );
    }
});