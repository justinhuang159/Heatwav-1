const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
	name: {
		type: String,
		index: false
	},
	link: {
		type: String,
		index: true
	},
	likes: {
		type: Number,
		index: false
	},
	dislikes: {
		type: Number,
		index: false
	}
	artist {
		type: String,
		index: false
	}
});