const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true}));

require('./app/routes')(app, {});

const port = 3000;
app.listen(port, () => {
  console.log('testing123');
  console.log('Server listening on port ' + port);
});
