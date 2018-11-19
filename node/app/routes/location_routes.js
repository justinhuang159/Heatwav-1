module.exports = function (app, db) {
	const Location = require('../models/location.js');

	// gets a location from the database
	app.get('/location/:id', async (req, res) => {
		const id = req.params.id;
		try {
			const location = await Location.findOne({ id: id });
			if (!location) {
				res.status(404).send({ response: 'Location not found error:' + id });
			} else {
				res.status(200).send({ response: (location) });
			}
		} catch (err) {
			res.status(500).send({ response:'Unknown Server Error: ' + err.message });	
		}
	});

	// adds a location to the database
	app.post('/location/:id', async (req, res) => {
		const id = req.params.id;
		const { lon, lat } = req.body;
		let location = new Location({
	 		id: id,
	 		loc: {
	 			type: 'Point',
	 			coordinates: [parseFloat(lon), parseFloat(lat)]
	 		}
		});
		try {
			const newLocation = await location.save();
			res.status(201).send({ response: 'New location created as: ' + id });
		} catch (err) {
			if (err.name === 'MongoError' && err.code === 11000) {
				res.status(409).send({ response: 'Duplicate key error: ' + err.message });
			}
			res.status(500).send({ response: 'Unknown Server Error: ' + err.message });
		}
	});

	// removes a location from the database
	app.delete('/location/:id', async (req, res) => {
		const id = req.params.id;
		try {
			const deletedLocation = await Location.deleteOne({ id: id });
			if (!deletedLocation) {
				res.status(404).send({ response: 'Location not found error: ' + id });
			} else {
				res.status(200).send({ response: 'Deleted location: ' + id });
			}
		} catch (err) {
			res.status(500).send({ response: 'Unknown Server Error: ' + err.message });
		}
	});

	// updates the coordinates of a location in the db
	app.put('/location/:id', async (req, res) => {
		const id = req.params.id;
		const { lon: lon, lat: lat } = req.body;
		const update = {
			loc: {
				type: 'Point',
				coordinates: [parseFloat(lon), parseFloat(lat)]
			}
		}
		try {
			const updatedLocation = await Location.findOneAndUpdate({ id: id }, {$set: update }, { runValidators: true, context: 'query' });
			if (!updatedLocation) {
				res.status(404).send({ response: 'Location not found error: ' + location });
			} else {
				res.status(200).send({ response: updatedLocation });
			}
		} catch (err) {
			res.status(500).send({ response: 'Unknown Server Error: ' + err.message });
		}
	});
};
