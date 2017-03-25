// *********************************************************************************
// quotes.js - this file offers a set of routes for sending data to view and saving data to the db
// *********************************************************************************
var express = require('express');
var router = express.Router();
var path = require('path');
var models = require(__dirname + '/../../models/index');

// Routes
// =============================================================
// router.get('/:username', function(req, res, next) {
//     res.send('api quotes GET success w username');
//     //this will select from database the next quote (based on usernames index) and return it as json
// });

router.get('/', function(req, res, next) {
    models.Quote.findOne({
        where: {
        id: 1
        }
    }).then(function(results) {
            // results are available to us inside the .then
        return res.json(results);
    });
});


module.exports = router;




//notes
  // GET route for showing next quote
  // app.get("/api/quotes/", function(req, res) {
  //   db.Post.findAll({
  //     where: {
  //       id: 1
  //     }
  //   })
  //   .then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });
  