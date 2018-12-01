const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ArtistSchema = new mongoose.Schema({
	user: {
		type: String,
		minlength: [1, 'Username cannot be empty.'],
		required: [true, 'Username is required.'],
		unique: true,
		index: true
	},
	name: {
		type: String,
		minlength: [1, 'Username cannot be empty.'],
		required: [true, 'Username is required.'],
		index: false
	},
	popularityCount: {
		type: Number,
		min: [0, "Populairty count must be positive."],
		index: false
	}
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('artists', ArtistSchema);

