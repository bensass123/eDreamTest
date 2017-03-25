var express = require('express');
var router = express.Router();
var path = require('path');
var models = require(__dirname + '/../../models/index');

router.get('/', function(req, res, next) {
  // res.send('homebase');
  models.Hard.findOne({
      where: {
        id: 1
      }
  }).then(function(results) {
        // results are available to us inside the .then
      return res.json(results);
   });
});

module.exports = router;
