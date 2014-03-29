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
