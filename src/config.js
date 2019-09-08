'use strict';

const extend = require('node.extend');

/**
 * @class WConfigReader
 * @type {WConfigReader}
 */
module.exports = class WConfigReader {
    constructor(path) {
        this._config = require(path + '/config.json');
        let extConfig = {};
        try {
            extConfig = require(path + '/config_ext.json');
        } catch (ex) {

        }
        this._config = extend(true, this._config, extConfig);
    }

    /**
     * @public
     * @returns {{}}
     */
    get() {
        return this._config;
    }

    /**
     * @public
     * @param {{}} options
     * @returns {{}}
     */
    extend(options) {
        this._config = extend(true, this._config, options);
        return this._config;
    }
};
