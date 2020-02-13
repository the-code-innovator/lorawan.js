'use strict';

export var constants = {
	MESSAGE_TYPES: {
		JOIN_REQUEST: 0,
		JOIN_ACCEPT: 1,
		UNCONFIRMED_DATA_UP: 2,
		UNCONFIRMED_DATA_DOWN: 3,
		CONFIRMED_DATA_UP: 4,
		CONFIRMED_DATA_DOWN: 5,
	
		DESCRIPTIONS: [
			'Join Request',
			'Join Accept',
			'Unconfirmed Data Up',
			'Unconfirmed Data Down',
			'Confirmed Data Up',
			'Confirmed Data Down',
			'RFU',
			'Proprietary'
		],

		DIRECTIONS: [
			'up',
			'down',
			'up',
			'down',
			'up',
			'down',
			null,
			null
		]
	},
	FCTRL: {
		ADR: 0x80,
		ADR_ACK_REQ: 0x40,
		ACK: 0x20,
		PENDING: 0x10
	},
	DLSETTINGS: {
		RX1_DR_OFFSET: {
			MASK: 0x70,
			POS: 4,
		},
		RX2_DATA_RATE: {
			MASK: 0x0F,
			POS: 0
		}
	},
	RX_DELAY: {
		MASK: 0x0F,
		POS: 0
	}
}