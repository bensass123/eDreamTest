var express = require('express');
var router = express.Router();
var path = require('path');
var models = require(__dirname + '/../../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'codeFriend API' });
});

/* include additional routes */
router.use('/quotes', require('./quotes'));
router.use('/easies', require('./easies'));
router.use('/reddits', require('./reddits'));
router.use('/funnies', require('./funnies'));
router.use('/hards', require('./hards'));
router.use('/intermediate', require('./intermediate'));
router.use('/indicies', require('./indicies'));

module.exports = router;
