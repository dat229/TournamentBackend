const express = require('express');
const router = express.Router();
const Match = require('../controllers/MatchController');

router.route('/').get(Match.getMatch);
router.route('/setmatch').post(Match.setMatch);

module.exports = router;