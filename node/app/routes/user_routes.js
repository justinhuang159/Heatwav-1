module.exports = function(app, db) {
	userSchema = require('../models/user.js');
	// returns user information
	app.get('/user/:id', async (req, res) => {
		const id = req.params.id;
	});

	app.post('/user/:id', async (req, res) => {
		const username = req.params.id;
		const { phone, isArtist, soundCloud, joinDate } = req.body;
		const User = db.model('User', userSchema);
		const user = new User({ username, phone, isArtist, soundCloud, joinDate});
		try {
			let newUser = await user.save();
			res.status(201).send({
				response: 'New user created as username: ' + username
			});
		} catch (err) {
			if (err.name === 'MongoError') {
				res.status(409).send(new MyError('There was an issue savaing to db', [err.message]));
			}
			res.status(500).send(err);
		}
	})
}