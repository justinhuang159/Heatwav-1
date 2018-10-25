module.exports = function(app, db) {
	const User = require('../models/user.js');

	// returns user information
	app.get('/user/:id', async (req, res) => {
		const username = req.params.id;
		try {
			const user = await User.findOne({ username: username });
			if (!user) {
				res.status(404).send(new MyError('User not found error: ' + username));
			} else {
				res.status(200).send(JSON.stringify(user));
			}
		} catch (err) {
			if (err.name === 'MongoError') {
				res.status(409).send(new MyError('There was an issue reading from db: ', [err.message]));
			}
			res.status(500).send(new MyError('Unknown Server Error'));
		}
	});

	app.post('/user/:id', async (req, res) => {
		const username = req.params.id;
		const joinDate = new Date();
		const { phone, isArtist, soundCloud } = req.body;
		const user = new User(
			{ 
				username: username, 
				phone: phone,
				joinDate: joinDate,
				isArtist: isArtist,
				soundCloud: soundCloud,
				popularityCount: '0'
			});
		try {
			const newUser = await user.save();
			res.status(201).send({
				response: 'New user created as username: ' + username
			});
		} catch (err) {
			if (err.name === 'MongoError') {
				res.status(409).send(new MyError('There was an issue saving to db: ', [err.message]));
			}
			res.status(500).send(new MyError('Unknown Server Error'));
		}
	});

	app.delete('/user/:id', async (req, res) => {
		const username = req.params.id;
		try {
			const deletedUser = await User.deleteOne({ username: username });
			if (!deletedUser) {
				res.status(404).send(new MyError('User not found error: ' + username));
			} else {
				res.status(200).send({
				response: 'Deleted user: ' + username
			});
			}
			
		} catch (err) {
			if (err.name === 'MongoError') {
				res.status(409).send(new MyError('There was an issue saving to db: ', [err.message]));
			}
			res.status(500).send(new MyError('Unknown Server Error'));
		}
	});


	app.put('/user/:id', async (req, res) => {
		const unsername = req.params.id;
		const { phone, isArtist, joinDate, soundCloud } = req.body;
		let options = {};
		console.log(phone);
		if (phone) {
			options.phone = phone;
		}
		if (isArtist) {
			options.isArtist = isArtist;
		}
		if (joinDate) {
			options.joinDate = joinDate;
		}
		if (soundCloud) {
			options.soundCloud = soundCloud;
		}
		try {
			const updatedUser = await User.findOneAndUpdate(username, options, { runValidators: true });
			console.log('test');
			console.log(await updatedUser);
			if (!updatedUser) {
				res.status(404).send('User not found error: ' + username);
			} else {
				res.status(200).send(JSON.stringify(updatedUser));
			}
		} catch (err) {
			if (err.name === 'MongoError') {
				res.status(409).send('There was an issue saving to db: ', [err.message]);
			}
			res.status(500).send('Unknown Server Error: ', [err.message]);
		}
	})

}