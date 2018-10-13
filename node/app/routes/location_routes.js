module.exports = function (app, db) {
	locationSchema = require('../models/location.js');
	// returns the location of nearby artists within a certain radius
	// if no query string for location is passed then defaults to 10 miles

	app.get('/locations/:id', (req, res) => {
		const id = req.params.id;
		console.log(id);
		res.send('looking for location of: ' + id);
	});

	// adds a location to the database
	app.post('/locations/:id', (req, res) => {
		const id = req.params.id;
		const { lat, lon } = req.body;
		let Location = db.model('Location', locationSchema);
		let location = new Location({ id: id, loc: [lat, lon] });
		location.save(function (err) {
			if (err) {
				console.log("there was an error saving to db");
			}
		});
		console.log(req.body);
		res.send('location added as: ' + id);
	});

	// removes a location from the database
	app.delete('/locations/:id', (req, res) => {
		const id = req.params.id;
		res.send('location removed as: ' + req.params.id);
	});

	// updates a location in the database
	app.put('/locations/:id', (req, res) => {
		const id = req.params.id;
		console.log(req.body);
		res.send('location updated as: ' + req.params.id);
	});
};
