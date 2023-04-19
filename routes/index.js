const routes = require('express').Router();
const jokes = require('../controllers/');

routes.get('/', (req, res) => {
  res.send('Ryan Alvord');
});

routes.get('/', jokes.displayJoke);

module.exports = routes;