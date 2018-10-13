const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
	id: {
		type: String,
		index: true
	},
	loc: {
		type: [Number],
		index: '2dsphere'
	}
});

module.exports = {
	LocationSchema
};