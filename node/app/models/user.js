const mongoose = require('mongoose');
const UserSchema =  new mongoose.Schema({
	username: {
		type: String,
		index: true,
		minlength: [1, 'username cannot be empty.'],
		required: [true, 'username is required.']
	},
	phone: {
		type: String,
		index: true,
		validate: {
			validator: function(v) {
				return /\d{3}-\d{3}-\d{4}/.test(v);
			},
			message: props => `${props.value} is not a valid phone number!`
		},
		required: [true, 'User phone number is required.']
	},
	isArtist: {
		type: Boolean,
		index: false,
		required: [true, 'Please indicate whether you are an artist.']
	},
	soundCloud: {
		type: String,
		validate: {
			validator: function(v) {
				return /^(https:\/\/soundcloud.com\/)/;
			},
			message: props => `${props.value} is not a valid Soundcloud link.`
		},
		index: true
	},
	joinDate: {
		type: Date,
		validate: {
			validator: function(v) {
				return /\d{4}-\d{2}-\d{2}/.test(v);
			},
			message: props => `${props.value} is not a valid date. Please adhere to this format: "YYYY-MM-DD".`
		},
		index: false
	}
});

module.exports = { UserSchema };