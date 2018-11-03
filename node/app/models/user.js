const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		minlength: [1, 'Username cannot be empty.'],
		required: [true, 'Username is required.'],
		unique: true,
		index: true
	},
	phone: {
		type: String,
		validate: {
			validator: function(v) {
				return /\d{3}-\d{3}-\d{4}/.test(v);
			},
			message: props => `${props.value} is not a valid phone number!`
		},
		required: [true, 'User phone-number is required.'],
		unique: true,
		index: true
	},
	joinDate: {
		type: Date,
		// validate: {
		// 	validator: function(v) {
		// 		return /\d{4}-\d{2}-\d{2}/.test(v);
		// 	},
		// 	message: props => `${props.value} is not a valid date. Please adhere to this format: "YYYY-MM-DD".`
		// },
		index: false
	},
	isArtist: {
		type: Boolean,
		required: [true, 'Please indicate whether you are an artist.'],
		index: false
	},
	soundCloud: {
		type: String,
		validate: {
			validator: function(v) {
				return /^(https:\/\/soundcloud.com\/)/;
			},
			message: props => `${props.value} is not a valid Soundcloud link.`
		},
		required: function() {
			return this.isArtist;
		},
		index: true
	},
	popularityCount: {
		type: Number,
		min: [0, "You can't have negative popularity."],
		index: false
	}
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('users', UserSchema);