'use strict';

import utility from 'utility.js';
import constants from 'constants.js';



class LoRaPacket {
	constructor(contents) {
		if (!(this instanceof LoRaPacket)) return new LoRaPacket(contents);
		var that = this;
	}
	getPacket = function () {
		return that._packet;
	}
	_getMessageType = function () {
		return (that._packet['MHDR'])
	}
}