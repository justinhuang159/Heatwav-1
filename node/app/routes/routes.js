module.exports = function (app, db) {
	// returns the location of nearby artists within a certain radius
	// if no query string for location is passed then default to 10 miles
	app.get('/locations', (req, res) => {
		const radius = (req.query.radius) ? req.query.radius : 10;
		console.log('specified search radius was: ' + radius);
		res.send(radius);
	});

	// adds a location to the database
	app.post('/locations', (req, res) => {
		console.log(req.body);
		res.send('location added');
	});
};
