$ = require('../vendor/jquery-2.1.0.min');

$(function () {
  var Speech = require('./speech');
      Commander = require('./commander');

  commander = new Commander();
  speech = new Speech();

  speech.onresult = commander.interpret;
  speech.onend = function () {
    console.log('end');
  };
  
  speech.start();
});
