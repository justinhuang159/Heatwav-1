const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
	name: {
		type: String,
		minlength: [1, 'Genre name cannot be empty.'],
	},
});

module.exports = { model: mongoose.models('mongoose', GenreSchema), schema: GenreSchema }