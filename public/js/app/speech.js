module.exports = Speech = function (player) {
  this.rec = new webkitSpeechRecognition();
  this.player = player;

  this.rec.lang = 'en-US';
  this.rec.continuous = true;
  this.rec.interimResults = true;
};

Speech.prototype.start = function () {
  this.rec.onresult = this.onresult.bind(this);
  this.rec.onend = this.onend.bind(this);
  this.rec.start();
};

Speech.prototype.onresult = function(event) {
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal)
      this.interpret(event.results[i][0].transcript);
  }
};

Speech.prototype.onend = function () {
  console.log('end');
};

Speech.prototype.interpret = function (str) {
  str = str.trim();

  if (str.match(/^play.+/)) {
    str = str.replace(/play/g, '').trim();
    return this.player.play(str);
  }

  if (str.match(/^play$/)) {
    return this.player.resume();
  }

  if (str.match(/^stop$/)) {
    return this.player.stop();
  }
}; 
