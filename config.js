/**
 * Created by wert2all on 14.12.16.
 */
/*jslint node: true */
"use strict";

module.exports = class {
	constructor(path) {
		this._extend = require('node.extend');
		this._config = require(path + '/config.json');
		let extConfig = {};
		try {
			extConfig = require(path + '/config_ext.json');
		} catch (ex) {

		}
		this._config = this._extend(true, this._config, extConfig);
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
		this._config = this._extend(true, this._config, options);
		return this._config;
	}
};
