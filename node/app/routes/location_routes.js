module.exports = function (app, db) {
	const Location = require('../models/location.js');

	// gets a location from the database
	app.get('/locations/:id', async (req, res) => {
		const id = req.params.id;
		try {
			const location = await Location.findOne({ id: id });
			if (!location) {
				res.status(404).send({ response: 'Location not found error:' + id });
			} else {
				res.status(200).send({ response: JSON.stringify(location) });
			}
		} catch (err) {
			res.status(500).send({ response:'Unknown Server Error: ' + err.message });	
		}
	});

	// adds a location to the database
	app.post('/locations/:id', async (req, res) => {
		const id = req.params.id;
		const { lon, lat } = req.body;
		let location = new Location({
	 		id: id,
	 		loc: [lon, lat]
		});
		try {
			const newLocation = await location.save();
			res.status(201).send({ response: 'New location created as:' + id });
		} catch (err) {
			if (err.name === 'MongoError' && err.code === 11000) {
				res.status(409).send({ response: 'Duplicate key error:: ' + err.message });
			}
			res.status(500).send({ response: 'Unknown Server Error' });
		}
	});

	// removes a location from the database
	app.delete('/locations/:id', async (req, res) => {
		const id = req.params.id;
		try {
			const deletedLocation = await Location.deleteOne({ id: id });
			if (!deletedLocation) {
				res.status(404).send({ response: 'Location not found error:' + id });
			} else {
				res.status(200).send({ response: 'Deleted location:' + id });
			}
		} catch (err) {
			res.status(500).send({ response: 'Unknown Server Error' });
		}
	});

	// updates the coordinates of a location in the db
	app.put('/locations/:id', async (req, res) => {
		const id = req.params.id;
		const { lon: lon, lat: lat } = req.body;
		const loc = [lon, lat];
		try {
			const updatedLocation = await Location.findOneAndUpdate({ id: id }, {$set: {loc: loc} }, { runValidators: true, context: 'query' });
			if (!updatedLocation) {
				res.status(404).send({ response: 'Location not found error: ' + location });
			} else {
				res.status(200).send({ response: JSON.stringify(updatedLocation) });
			}
		} catch (err) {
			res.status(500).send({ response: 'Unknown Server Error: ' + err.message });
		}
	});
};
