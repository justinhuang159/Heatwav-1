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
	const routes = require('./app/routes');
	routes(app, db);

	// for testing db connection
	// app.get("/test/:id", (req, res) => {
	// 	res.send(req.params);
	// });

	// const testSchema = new mongoose.Schema({
	// 	name: String
	// });

	// const Test = mongoose.model('Test', testSchema);
	// const test = new Test({ name: "tester321" });
	// console.log(test.name);

	// test.save(function (err, test) {
	// 	if (err) return console.error(err);
	// });


	const port = 3000;
	app.listen(port, () => {
	  console.log('Server listening on port ' + port);
	});
});
