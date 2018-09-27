const addArtist = require('./routes');

module.exports = function (app, db) {
  addArtist(app, db);
}
