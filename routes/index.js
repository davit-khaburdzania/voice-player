'use strict';

exports.index = function(req, res){
  res.render('index');
};


exports.youtube = function (req, res) {
  var youtube = require('youtube-feeds'),
      q = req.query.q, items;

  youtube.feeds.videos({ q: q }, function (error, data) {
    if (error) {
      res.statusCode = 500;
      return res.json({ message: 'error from youtube api: ' + error });
    }

    if (!data.items) {
      res.statusCode = 400;
      return res.json({ message: 'no result' });
    }

    items = data.items.map(function (item) {
      return {
        id: item.id,
        category: item.category,
        uploader: item.uploader,
        title: item.title,
        thumbnail: {
          small: item.thumbnail.sqDefault,
          large: item.thumbnail.hqDefault
        },
        duration: item.duration
      };
    });

    items = items.slice(0, 5);
    res.json(items);
  });
};
