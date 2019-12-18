const express = require('express');
const router = express.Router();
const gamecard = require('./gamecard');
const playercard = require('./playercard');

router.use('/gamecard', gamecard);
router.use('/playercard', playercard);



module.exports = router;