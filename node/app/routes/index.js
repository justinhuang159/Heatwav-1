const location = require('./location_routes');
const map = require('./map_routes');

module.exports = function (app, db) {
  location(app, db);
  map(app, db);
}
