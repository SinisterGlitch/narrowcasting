'use strict';

import _ from 'lodash';

export default {

    linkState(propertyPath) {
        return {
            value: _.get(this.state, propertyPath),
            requestChange: value => {
                _.set(this.state, propertyPath, value);
                this.forceUpdate()
            }
        };
    }
};