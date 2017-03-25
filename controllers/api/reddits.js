// *********************************************************************************
// eulers.js - this file offers a set of routes for sending data to view and saving data to the db
// *********************************************************************************
var express = require('express');
var router = express.Router();
var path = require('path');

// Routes
// =============================================================

  
router.get('/:username/:difficulty', function(req, res, next) {
    res.send('api reddits GET success w username');
    // this will select from database the next reddit challenge (based on usernames index,
    // andn requested difficulty) and return it as json
});

router.get('/', function(req, res, next) {
    res.send('api reddits GET success');
    //this is only a test function and will be removed for production
});


module.exports = router;
