module.exports = function (app, db) {
	const Location = require('../models/location.js');

	// returns the location of nearby artists within a certain radius
	// if no query is passed then it returns all user locations
	// query will include lon, lat, and radius
	app.get('/map', async (req, res) => {
		const { lon, lat, radius } = req.body;
		if (radius == null) {
			// return all of the location documents sorted by proxmity
			try {
				const allLocations = await Location.find({
					loc: {
						$near: {
							$geometry: {
								type: 'Point',
								coordinates: [lon, lat]
							}
						}
					}
				});
				res.status(200).send({ response: allLocations });
			} catch (err) {
				res.status(500).send({ response: 'Unknown Server Error: ' + err.message });
			}
		} else {
			// sanatize the query
			if (isNaN(radius) || radius < 0) {
				res.status(400).send({ response: 'Error, query passed must be a non-negative search radius.' });
			} else {
				try {
					const locations = await Location.find({
						loc: {
							$near: {
								$geometry: { 
									type: 'Point',
									coordinates: [lon,lat] 
						        },
						        $maxDistance: radius
					        }
						}
					});
					res.status(200).send({ response: locations });
				} catch (err) {
					res.status(500).send({ response: 'Unknown Server Error: ' + err.message });
				}
			};
		}
	});
}
