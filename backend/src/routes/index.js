const express = require('express');
const router = express.Router();

const matchRoute = require('./matchRoute');

router.use('/match', matchRoute);

module.exports = router;
