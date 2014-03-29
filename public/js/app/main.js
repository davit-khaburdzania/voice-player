$(function () {
  var speech = require('./speech');
  speech.start(function (result) {
    console.log(result);
  });
});
