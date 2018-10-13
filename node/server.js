const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbConfig = require('./config/db');

const app = express();

// middleware
app.use(bodyParser.json({ extended: true}));

// deprecation stuff
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// connect to db
mongoose.connect(dbConfig.url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	require('./app/routes')(app, db);

	app.get("/test/:id", (req, res) => {
		res.send(req.params);
	})

	const port = 3000;
	app.listen(port, () => {
	  console.log('Server listening on port ' + port);
	});
});
