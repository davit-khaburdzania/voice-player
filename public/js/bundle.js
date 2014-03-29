(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function () {
  var speech = require('./speech');
  speech.start(function (result) {
    console.log(result);
  });
});

},{"./speech":2}],2:[function(require,module,exports){
module.exports = {
  start: function (done) {
    var rec = new webkitSpeechRecognition();
    
    rec.lang = 'en-US';
    rec.continuous = true;
    rec.interimResults = true;
    rec.start();

    rec.onresult = function(event) {
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal)
          done(event.results[i][0].transcript);
      }
    };

    rec.onend = function () {
      console.log('end');
      rec.stop();
      rec.start();
    };
  }
}

},{}]},{},[1,2]);