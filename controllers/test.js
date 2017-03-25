var express = require('express');
var router = express.Router();
var models = require(__dirname + '/../models/index');

/* testing routing with sequalize */
router.get('/', function(req, res) {
  models.Test.findAll({}).then(function(all) {
    res.json(all);
  });
});

router.post('/', function(req, res) {
  models.Test.create({
    title: req.body.title
  }).then(function(test) {
    res.json(test);
  });
});

module.exports = router;