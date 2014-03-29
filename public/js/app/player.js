module.exports = Player = function () {
  this.status = 'stop';
  this.load_iframe();
  this.load_player();
};

Player.prototype.load_iframe = function () {
  var tag = document.createElement('script'),
      firstScriptTag = document.getElementsByTagName('script')[0];
  
  tag.src = "https://www.youtube.com/iframe_api";
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

Player.prototype.load_player = function () {
  self = this;
  window.onYouTubeIframeAPIReady = function () {
    self.player = new YT.Player('player', {
      height: '390',
      width: '640'
    });
  }
};


Player.prototype.play = function (track) {
  self = this;

  $.get('/youtube', { q: track }, function (tracks) {
    var current = tracks.shift();
    self.tracks = tracks;
    
    self.change_track(current);
  }).fail(function (error) {
    console.log('failed to load tracks from server: ' + error);
  });

  console.log('playing ' + track + ' ...');
};

Player.prototype.change_track = function (track) {
  self.player.stopVideo();
  self.player.loadVideoById(track.id);
  self.status = 'play';

  $('.song-thumb').attr('src', track.thumbnail.large);
  $('.title').text(track.title);
};

Player.prototype.resume = function (track) {
  if (this.status === 'play') return
  console.log('resumed track');

  this.player.playVideo();
  this.status = 'play';
};

Player.prototype.stop = function () {
  if (this.status === 'stop') return
  console.log('stoped track');

  this.player.pauseVideo();
  this.status = 'stop';
};
