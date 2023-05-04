const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/characters', require('./characters'));
router.use('/planets', require('./planets'));

module.exports = router;