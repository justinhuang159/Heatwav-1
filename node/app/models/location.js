const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const PointSchema = require('./point.js').schema;

const LocationSchema = new mongoose.Schema({
	id: {
		type: String,
		index: true,
		minlength: [1, 'id cannot be empty.'],
		required: [true, 'Please specify the id of the location.'],
		unique: true
	},
	loc: {
		type: PointSchema,
		required: [true, 'Please specify a location.'],
		index: '2dsphere'
	}
});

LocationSchema.index({ "loc": "2dsphere" });
LocationSchema.plugin(uniqueValidator);
module.exports = mongoose.model('locations', LocationSchema);