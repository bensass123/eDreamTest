//Indices.js
'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');
var models = require(__dirname + '/../../models/index');

//database call to get indeces goes here
var retrieveIndices = (req, res, next) => {
  req.indexHards = 2;
  console.log('retrieveIndices run');
  next();
}

router.use(retrieveIndices);

//another middleware function: database call to set all relevant json data (content, not Indices),
// leaving last function to return it.



var callDB = (req, res, next) => {
	// set req.contentFunnies = json object pulled from DB where index = indexFunnies
  var iH = req.indexHards;
  models.Hard.findOne({
      where: {
        id: iH
      }
  }).then(function(results) {
        // results are available to us inside the .then
      req.results = results;
   });
  console.log('callDB run');
  next();
}

router.use(callDB);	

//convert html in reddit data into displayable form
var makeHtmlNice = (req, res, next) => {
  var str = req.results.selfText_html;
  str = str.replace(/&amp;lt;/g, '\<');
  str = str.replace(/&amp;gt;/g, '\>');
  str = str.replace(/&lt;/g, '<');
  str = str.replace(/&gt;/g, '>');
  str = str.replace(/&amp;amp;/g, '&');
  str = str.replace(/&amp;/g, '&');
  str = str.replace(/&quot;/g, '"');
  req.results.selfText_html = str;
  next();
}

router.use(makeHtmlNice); 

//another function to increment all Indices

// code below is test only, it will be adjusted to make an actual call to db based on Indices, 
// goal of these two functions is to return all needed json data and render 
// all other files in this directory useless :)
router.get('/', function(req, res, next) {
  console.log('**req.results**');
  console.log(req.results);
  res.render(test2, req.results);
});

module.exports = router;
