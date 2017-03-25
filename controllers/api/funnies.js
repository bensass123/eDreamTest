// *********************************************************************************
// funnies.js - this file offers a set of routes for sending data to view and saving data to the db
// *********************************************************************************

var express = require('express');

var router = express.Router();

var path = require('path');


// Routes
// =============================================================

  
router.get('/:username', function(req, res, next) {
    res.send('api funnies GET success w username');
    //this will select from database the next funny (based on usernames index) and return it as json
});

router.get('/', function(req, res, next) {
    res.send('api funnies GET success');
    //this is only a test function and will be removed for production
});


module.exports = router;
