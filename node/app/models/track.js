const mongoose = require('mongoose');
const GenreSchema = require('./genre.js');

const TrackSchema = new mongoose.Schema({
	name: {
		type: String,
		index: false,
		minlength: [1, 'Track name cannot be empty.'],
		required: [true, 'A track name is required.']
	},
	link: {
		type: String,
		index: true,
		required: [true, 'A link to the track is required.']
	},
	id: {
		type: String,
		index: true,
		required: [true, 'Please include a track id']
	}
	likes: {
		type: Number,
		index: false,
		min: [0, 'Number of likes must be positive.']
	},
	dislikes: {
		type: Number,
		index: false,
		min: [0, 'Number of dislikes must be positive.']
	},
	artists: {
		type: [String],
		index: false,
	},
	features: {
		type: [String],
		index: false
	},
	genres: {
		type: [GenreSchema],
		index: false
	},
	averageUserPlaytime: {
		type: Number,
		index: false,
		min: [0, 'The average user playtime must be positive.']
	},
	length: {
		type: Number,
		index: false,
		min: [0, 'Song length must be positive.']
	},
	popularityIndex: {
		type: Number,
		index: false
	},
	date: {
		type: Date,
		index: false
	},
	album: {
		type: String,
		index: false
		minlength: [1, 'Album name cannot be empty']
	}
});

module.exports = mongoose.models('tracks', TrackSchema);