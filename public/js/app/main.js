$ = require('../vendor/jquery-2.1.0.min');

$(function () {
  var speech = require('./speech');
  speech.start(function (result) {
    console.log(result);
  });
});
