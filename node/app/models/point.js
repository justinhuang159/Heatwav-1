const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
	type: {
		type: String,
		enum: ['Point'],
		required: true
	},
	coordinates: {
		type: [Number],
		required: [true, 'Please specify a coordinate consisting of longitude then latitude.']
	},
});

module.exports = { schema: PointSchema, model: mongoose.model('points', PointSchema) };