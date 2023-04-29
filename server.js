const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const mongodb = require('./db/connect.js');
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))
  .use((req, res, next) => {
  // Who has access to the database via URL
  res.setHeader('Access-Control-Allow-Origin', 'https://cse341-contacts-frontend.netlify.app/');
  // What control they have over
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})
  .use('/', bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
// app.listen(port, () => {
//     console.log(`Running on port ${port}`)
// })
