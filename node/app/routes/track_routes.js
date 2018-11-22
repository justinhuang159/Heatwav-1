module.exports = function (app, db) {
	const Track = require('./track.js');
	const createTrack = require('./util/createTrack')

	app.get('/track:id', async (req, res) => {
		const id = req.param.id;
		try {
			const track = await Track.findOne({ id: id });
			if (!track) {
				res.status(404).send({ response: 'Track not found error: ' + id });
			} else {
				res.status(200).send({ response: track });
			}
		} catch (err) {
			res.status(500).send({ response: 'Unknown Server Error: ' + err.message });
		}
	});

	// recieves track id as param and soundcloud link as query
	app.post('/track:id', async (req, res) => {
		
	});

	app.put('/track:id', async (req, res) => {
		
	});

	app.delete('/track:id', async (req, res) => {
		
	});
}