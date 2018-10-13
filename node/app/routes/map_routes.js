module.exports = function (app, db) {
	app.get('/map', (req, res) => {
		const radius = (req.query.radius) ? req.query.radius : 10;
		console.log('specified search radius was: ' + radius);
		res.send(radius);
	});
}
