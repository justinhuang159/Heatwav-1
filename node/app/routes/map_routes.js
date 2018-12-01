module.exports = function (app, db) {
	const Location = require('../models/location.js');

	// returns the location of nearby artists within a certain max/min distance
	// if no query is passed then it returns all user locations
	// query will include lon, lat, and maxDistance
	app.get('/map', async (req, res) => {
		const { lon, lat, maxDistance, minDistance } = req.body;
		if (maxDistance == null && minDistance == null) {
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
		} else if (minDistance == null) {
			// sanatize the query
			if (isNaN(maxDistance) || maxDistance < 0) {
				res.status(400).send({ response: 'Error, maxDistance must be a non-negative number.' });
			} else {
				try {
					const locations = await Location.find({
						loc: {
							$near: {
								$geometry: { 
									type: 'Point',
									coordinates: [lon,lat] 
						        },
						        $maxDistance: maxDistance
					        }
						}
					});
					res.status(200).send({ response: locations });
				} catch (err) {
					res.status(500).send({ response: 'Unknown Server Error: ' + err.message });
				}
			};
		} else if (maxDistance == null) {
			// sanatize the query
			if (isNaN(minDistance) || minDistance < 0) {
				res.status(400).send({ response: 'Error, minDistance must be a non-negative number.' });
			} else {
				try {
					const locations = await Location.find({
						loc: {
							$near: {
								$geometry: { 
									type: 'Point',
									coordinates: [lon,lat]
						        },
						        $minDistance: minDistance
					        }
						}
					});
					res.status(200).send({ response: locations });
				} catch (err) {
					res.status(500).send({ response: 'Unknown Server Error: ' + err.message });
				}
			};
		} else {
			if (isNaN(minDistance) || minDistance < 0 || isNaN(maxDistance) || maxDistance < 0) {
				res.status(400).send({ response: 'Error, minDistance and maxiDistance must be non-negative numbers.' });
			} else {
				try {
					const locations = await Location.find({
						loc: {
							$near: {
								$geometry: { 
									type: 'Point',
									coordinates: [lon,lat]
						        },
						        $maxDistance: maxDistance,
						        $minDistance: minDistance
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
