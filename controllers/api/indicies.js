//Indices.js
'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');


//database call to get indeces goes here
var retrieveIndices = (req, res, next) => {
  req.indexFunnies = 1;
  req.indexEulers = 2;
  req.indexQuotes = 3;
  req.indexReddits = 4;
  console.log('retrieveIndices run');
  next();
}

router.use(retrieveIndices);

//another middleware function: database call to set all relevant json data (content, not Indices),
// leaving last function to return it.



var callDB = (req, res, next) => {
	// set req.contentFunnies = json object pulled from DB where index = indexFunnies
	// 
  req.indexFunnies += 1;
  req.indexEulers += 1;
  req.indexQuotes += 1;
  req.indexReddits += 1;
  console.log('callDB run');
  next();
}

router.use(callDB);	

//convert html in reddit data into displayable form
var makeHtmlNice = (req, res, next) => {
  var str = req.contentSelfTextHtml;
  str = str.replace(/&amp;lt;/g, '\<');
  str = str.replace(/&amp;gt;/g, '\>');
  str = str.replace(/&lt;/g, '<');
  str = str.replace(/&gt;/g, '>');
  str = str.replace(/&amp;amp;/g, '&');
  str = str.replace(/&amp;/g, '&');
  str = str.replace(/&quot;/g, '"');
  req.contentSelfTextHtmlCorrected = str;
  next();
}

router.use(makeHtmlNice); 

//another function to increment all Indices

// code below is test only, it will be adjusted to make an actual call to db based on Indices, 
// goal of these two functions is to return all needed json data and render 
// all other files in this directory useless :)
router.get('/:username', function(req, res, next) {
  var responseText = 'Hello ' + req.params.username + '!<br>';
  responseText += '<small>indexFunnies ' + req.indexFunnies + '</small>';
  responseText += '<small>indexEulers ' + req.indexEulers + '</small>';
  responseText += '<small>indexQuotes ' + req.indexQuotes + '</small>';
  responseText += '<small>indexReddits ' + req.indexReddits + '</small>';
  res.send(responseText)
});

module.exports = router;
