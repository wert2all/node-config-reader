/**
 * Created by wert2all on 14.12.16.
 */
/*jslint node: true */
"use strict";

module.exports = class {
    constructor(path) {
        this._config = require(path + '/config.json');
        let extConfig = {};
        try {
            extConfig = require(path + '/config_ext.json');
        } catch (ex) {

        }
        this._config = require('node.extend')(true, this._config, extConfig);
    }

    get() {
        return this._config;
    }
};
