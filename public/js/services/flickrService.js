var app = angular.module('dburry');

app.service('flickrSrvc', function($http){
  this.getPageOne = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:9999/media'
    }).then(function(err, res) {
      if (err) {
        console.log(err);
        return err;
      }
      else {
        console.log(res.data)
        return res.data;
      }
    })
  }

  this.getPageTwo = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:9999/mediaMore'
    }).then(function(err, res) {
      if (err) {
        console.log(err);
        return err;
      }
      else {
        console.log(res.data)
        return res.data;
      }
    })
  }

  this.getPageThree = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:9999/mediaEvenMore'
    }).then(function(err, res) {
      if (err) {
        console.log(err);
        return err;
      }
      else {
        console.log(res.data)
        return res.data;
      }
    })
  }

});
