const express = require('express');
const routes = express.Router();
// const quotes = require('../controllers/');

routes.use('/', require('./swagger'));

routes.use('/contacts', require('./contacts'));
// routes.get('/', quotes.displayQuote);

module.exports = routes;
