const express = require('express');
const helper =require('../util/helper.js')
const logger = require('../logger/logger.js')
const caseModule = require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    helper.date()
    helper.month()
    helper.getBatchInfo ()
    logger.welcome()
    caseModule.trim()
    caseModule.changeToLowerCase()
    caseModule.changeToUpperCase() 

    res.send('My first ever api!')
});

module.exports = router;
        