$ = require('../vendor/jquery-2.1.0.min');

$(function () {
  var Speech = require('./speech'),
      Player = require('./player');

  player = new Player();
  speech = new Speech(player);

  speech.start();
});
