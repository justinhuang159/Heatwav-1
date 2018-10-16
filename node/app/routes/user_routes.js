module.exports = function(app, db) {
	const User = require('../models/user.js');
	// returns user information
	app.get('/user/:id', async (req, res) => {
		const id = req.params.id;
	});

	app.post('/user/:id', async (req, res) => {
		const username = req.params.id;
		const { phone, isArtist, soundCloud, joinDate } = req.body;
		// const user = new User({ username, phone, isArtist, soundCloud, joinDate});
		const user = new User({ username: username, phone: "123-345-5678", joinDate: '2018-08-16', popularityCount: '0', isArtist: 'true', soundCloud: 'https://soundcloud.com/stream' })
		try {
			let newUser = await user.save();
			res.status(201).send({
				response: 'New user created as username: ' + username
			});
		} catch (err) {
			if (err.name === 'MongoError') {
				res.status(409).send(new MyError('There was an issue saving to db: ', [err.message]));
			}
			res.status(500).send(err);
		}
	})
}