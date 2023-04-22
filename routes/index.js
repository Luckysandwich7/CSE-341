const express = require('express');
const router = express.Router();
// const quotes = require('../controllers/');

router.use('/contacts', require('./contacts'))
// routes.get('/', quotes.displayQuote);

module.exports = routes;