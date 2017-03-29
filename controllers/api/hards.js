var express = require('express');
var router = express.Router();
var path = require('path');
var models = require(__dirname + '/../../models/index');

//add functionality to update current index to id
router.get('/:id', function(req, res, next) {
  // res.send('homebase');
  models.Hard.findOne({
      where: {
        id: req.params.id
      }
  }).then(function(results) {
        // results are available to us inside the .then
      	res.json(results.dataValues);
   });
});



//returns hard at current index and increments index

router.get('/current', stormpath.loginRequired, function(req, res) {
	req.user.getCustomData(function(err, data) {
		if(data.indexHard){
			models.Hard.findOne({
      			where: {
        			id: data.indexHard
      			}
  			}).then(function(results) {
		        // results are available to us inside the .then
		      	res.json(results.dataValues);
		   	});
		} else {
			data.indexHard = 2;
		}
});

module.exports = router;