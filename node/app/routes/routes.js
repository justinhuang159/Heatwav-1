module.exports = function (app, db) {
	// returns the location of nearby artists within a certain radius
	// if no query string for location is passed then default to 10 miles
	app.get('/locations', (req, res) => {
		const radius = (req.query.radius) ? req.query.radius : 10;
		console.log('specified search radius was: ' + radius);
		res.send(radius);
	});

	// adds a location to the database
	app.post('/locations:id', (req, res) => {
		const id = req.params.id;
		console.log(req.body);
		res.send('location added as: ' + id);
	});

	// removes a lcation from the database
	app.delete('/locations:id', (req, res) => {
		const id = req.params.id;
		res.send('location removed as: ' + req.params.id);
	});

	// updates a location in the database
	app.puts('/locations:id', (req, res) => {
		const id = req.params.id;
		console.log(req.body);
		res.send('location updated as: ' + req.params.id);
	});
};
