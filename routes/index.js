const routes = require('express').Router();
const quotes = require('../controllers/');

routes.get('/', quotes.displayQuote);

module.exports = routes;