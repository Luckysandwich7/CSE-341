const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Ryan Alvord');
});

module.exports = routes;