const location = require('./location_routes');
const map = require('./map_routes');
const user = require('./user_routes');

module.exports = function (app, db) {
  location(app, db);
  map(app, db);
  user(app, db);
}
