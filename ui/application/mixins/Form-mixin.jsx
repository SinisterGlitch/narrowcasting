'use strict';

import _ from 'lodash';

export default {

    linkState(propertyPath) {
        return {
            value: _.get(this.state, propertyPath),
            requestChange: value => this.setState(_.set(_.clone(this.state), propertyPath, value))
        };
    }
};