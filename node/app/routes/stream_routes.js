module.exports = (app, db) => {
	// returns a one-time use streaming url from soundcloud
	app.get('/stream:id', (req, res) => {
		const id = req.param.id;
		// calls python script
		// returns response containing link
	});
}