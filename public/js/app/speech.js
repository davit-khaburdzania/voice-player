module.exports = Speech = function (opt) {
  opt = opt || {};
  
  this.lang = opt.lang || 'en-US';
  this.continuous = opt.continuous || true;
  this.interimResults = opt.interimResults || true;

  this.onresult = opt.onresult;
  this.onend = opt.onend;
};

Speech.prototype.start = function () {
  var rec = new webkitSpeechRecognition(),
      self = this;

  rec.lang = self.lang;
  rec.continuous = self.continuous;
  rec.interimResults = self.interimResults;
  
  rec.start();

  rec.onresult = function(event) {
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal && self.onresult)
        self.onresult(event.results[i][0].transcript);
    }
  };

  rec.onend = self.onend;
};
