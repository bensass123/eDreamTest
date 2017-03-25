var express = require('express');
var router = express.Router();
var path = require('path');
var models = require(__dirname + '/../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'codeFriend' });
});

/* include additional routes */
router.use('/users', require('./users'));
router.use('/test', require('./test'));

router.use('/api', require('./api'));
//router.use('/html', require('./html'));

module.exports = router;
