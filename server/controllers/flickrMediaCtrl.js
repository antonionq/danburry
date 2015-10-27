var request = require('request');

module.exports = {
  getInfo: function(req, res) {
    request('https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=' + process.env.FLICK_SID + '&user_id=136190219%40N07&per_page=12&page=1&format=json&nojsoncallback=1',
    function(err, response, body) {
      if(err) {
        console.log(err);
        res.send(err);
      }
      else if(!err && response.statusCode == 200) {
        console.log(body)
        res.send(body);
      }
    })
  },
  getInfo2: function(req, res) {
    request('https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=' + process.env.FLICK_SID + '&user_id=136190219%40N07&per_page=12&page=2&format=json&nojsoncallback=1',
    function(err, response, body) {
      if(!err && response.statusCode == 200) {
        console.log(body)
        res.send(body);
      }
    })
  },
  getInfo3: function(req, res) {
    request('https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=' + process.env.FLICK_SID + '&user_id=136190219%40N07&per_page=12&page=3&format=json&nojsoncallback=1',
    function(err, response, body) {
      if(!err && response.statusCode == 200) {
        console.log(body)
        res.send(body);
      }
    })
  }
}
