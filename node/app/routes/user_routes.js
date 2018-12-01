module.exports = function(app, db) {
	const User = require('../models/user.js');

	// returns user information
	app.get('/user/:id', async (req, res) => {
		const username = req.params.id;
		try {
			const user = await User.findOne({ username: username });
			if (!user) {
				res.status(404).send({ response: 'User not found error: ' + username });
			} else {
				res.status(200).send({ response: user });
			}
		} catch (err) {
			res.status(500).send({ response: 'Unknown Server Error: ' + err.message });
		}
	});

	// takes username as param and phone and isArtist and or soundCloud as queries
	app.post('/user/:id', async (req, res) => {
		const username = req.params.id;
		const joinDate = new Date();
		let soundCloud = req.body.soundCloud;
		if (!soundCloud) {
			soundCloud = null;
		}

		const { phone, isArtist } = req.body;
		
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
			res.status(201).send({ response: 'New user created as username: ' + username });
		} catch (err) {
			if (err.name === 'MongoError' && err.code === 11000) {
				res.status(409).send({ response: 'Duplicate key error:: ' + err.message });
			}
			res.status(500).send({ response: 'Unknown Server Error' });
		}
	});

	app.delete('/user/:id', async (req, res) => {
		const username = req.params.id;
		try {
			const deletedUser = await User.deleteOne({ username: username });
			if (!deletedUser) {
				res.status(404).send({ response: 'User not found error: ' + username });
			} else {
				res.status(200).send({ response: 'Deleted user: ' + username });
			}
			
		} catch (err) {
			res.status(500).send({ response: 'Unknown Server Error: ' + err.message });
		}
	});

	// updates up to three fields: phone, isArtist, soundCloud, all other fields passed are ignored
	// if update is successful, returns the updated user model
	app.put('/user/:id', async (req, res) => {
		const username = req.params.id;
		const { phone, isArtist, soundCloud } = req.body;
		let options = {};
		if (phone) {
			options.phone = phone;
		}
		if (isArtist) {
			options.isArtist = isArtist;
		}
		if (soundCloud) {
			options.soundCloud = soundCloud;
		}
		try {
			const updatedUser = await User.findOneAndUpdate({ username: username}, { $set: options }, { runValidators: true, context: 'query' });
			if (!updatedUser) {
				res.status(404).send({ response: 'User not found error: ' + username });
			} else {
				res.status(200).send({ response: updatedUser });
			}
		} catch (err) {
			res.status(500).send({ response: 'Unknown Server Error: ' + err.message });
		}
	})

}