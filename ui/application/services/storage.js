'use strict';

export default {

    write(key, value) {
        if (!value) {
            return;
        }

        if (typeof localStorage === 'object') {
            localStorage.setItem(key, JSON.stringify(value));
        }
    },

    clear(key) {
        if (typeof localStorage === 'object') {
            localStorage.removeItem(key);
        }
    },

    read(key, defaultValue) {
        if (typeof localStorage === 'object') {
            var value = localStorage.getItem(key);
            if (value) {
                value = JSON.parse(value);
            }

            return value ? value : defaultValue;
        }
    }
};