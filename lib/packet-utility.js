'use strict';

import LoRaPacket from 'packet.js';

export function fromWire(contents) {
	var packet = new LoRaPacket();
	packet._fromWire(contents);

	if (packet._packet !== null) {
		return packet;
	} else {
		return null;
	}
};

export function fromFields(userFields) {
	var packet = new LoRaPacket();
	packet._fromFields(userFields);

	if (packet._packet !== null) {
		return packet;
	} else {
		return null;
	}
};
