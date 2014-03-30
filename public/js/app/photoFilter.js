module.exports = function(vintage) {
  var options = {
    onError: function() {
      alert('ERROR');
    }
  };

  var effect = {
    vignette: 0.6,
    sepia: true
  };

  $('.song-thumb').vintage(options, effect);

};
