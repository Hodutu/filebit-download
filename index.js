'use strict';

var request = require('request');
var link = require('./link.json').url;

console.log(link);
request.head(link, function (error, response, body) {
  console.log(response.headers['content-length']);
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
})
