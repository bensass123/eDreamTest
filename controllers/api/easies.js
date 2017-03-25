// *********************************************************************************
// easies.js - this file offers a set of routes for sending data to view and saving data to the db
// *********************************************************************************
var express = require('express');
var router = express.Router();
var path = require('path');
var models = require(__dirname + '/../../models/index');

router.get('/', function(req, res, next) {
  // res.send('homebase');
  models.Easy.findAll().then(function(results) {
        // results are available to us inside the .then
      return res.json(results);
   });
});

module.exports = router;


// {
//       where: {
//         id: 1
//       }}