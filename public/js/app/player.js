module.exports = Player = function () {

};

Player.prototype.play = function (track) {
  console.log('playing ' + track + ' ...');
};

Player.prototype.resume = function (track) {
  console.log('resumed track');
};

Player.prototype.stop = function () {
  console.log('stoped track');
};
