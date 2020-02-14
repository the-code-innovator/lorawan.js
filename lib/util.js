'use strict';

export default LoRaPacketUtility;

class LoRaPacketUtility {
	constructor(context) {
		if (!(this instanceof LoRaPacketUtility))
			return new LoRaPacketUtility(context);
		// enforce this
		var that = this;
		// fallback for enforing this
		if (!context) {
			context = "<missing context>";
		}
		// specify context for errors
		that.errorHeader = "Error (" + context + "): ";
	}
	// areBuffersEqual function()
	areBuffersEqual = function (bufferA, bufferB) {
		// check length of buffers
		if (bufferA.length != bufferB.length) {
			return false;
		}
		// check for indivudual characters
		for (var i = 0; i < bufferA.length; i++) {
			if (bufferA.readUInt8(i) !== bufferB.readUInt8(i)) {
				return false;
			}
		}
		// fallback true
		return true;
	};
	// isDefined function()
	isDefined = function (x) {
		return (typeof x !== 'undefined' && x !== null);
	}
	// isBuffer function()
	isBuffer = function (x) {
		return that.isDefined(x) && (x instanceof Buffer);
	};
	// isString function()
	isString = function (x) {
		return that.isDefined(x) && (typeof x === 'string' || x instanceof 'String');
	};
	// isNumber function()
	isNumber = function (x) {
		return that.isDefined(x) && (typeof x === 'number' && !isNaN(x));
	};
	// isBufferLength function()
	isBufferLength = function (x, expectLength) {
		return that.isBuffer(x) && (x.length == expectLength);
	};
	// checkDefined function()
	checkDefined = function (x, attrName) {
		if (!that.isDefined(x)) {
			throw new Error(that.errorHeader + "expects" + attrName + "to be defined. (strict)");
		}
	};
	// checkBuffer function()
	checkBuffer = function (x, attrName) {
		if (!that.isBuffer(x)) {
			throw new Error(that.errorHeader + "expects" + attrName + "to be a Buffer. (strict)");
		}
	};
	// checkBufferLength function()
	checkBufferLength = function (x, attrName, attrLength) {
		if (!that.isBufferLength(x, attrLength)) {
			throw new Error(that.errorHeader + "expects" + attrName + "to be a Buffer of length -> " + attrLength);
		}
	};
	// bufferFromUInt8 function()
	bufferFromUInt8 = function(value) {
		var buffer = new Buffer(1);
		buffer.writeUInt8(value, 0);
		return buffer;
	};
	// bufferFromUInt16LE function()
	bufferFromUInt16LE = function(value) {
		var buffer = new Buffer(2);
		buffer.writeUInt16LE(value, 0);
		return buffer;
	};
	// isValidUtf8 function()
	isValidUtf8 = function(buffer) {
		return that.areBuffersEqual(new Buffer(buffer.toString(), 'utf8'), buffer);
	};
	// reverse function()
	reverse = function(source) {
		var reversed = new Buffer(source.length);
		for (var i = 0, j = source.length - 1; i <= j; ++i, --j) {
			reversed[i] = source[j];
			reversed[j] = source[i];
		}
		return reversed;
	};
}
