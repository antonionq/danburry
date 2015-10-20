var app = angular.module('dburry');

app.controller('homeCtrl', function($scope, $log, $timeout){
  $scope.map = { center: { latitude: 40.234508, longitude: -111.659036 }, zoom: 18 };
  $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 40.234508,
        longitude: -111.659036
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
});

app.controller('flickr', function ($scope, $http) {
  $scope.results = [];
  $scope.results2 = [];
  $scope.results3 = [];
  $scope.isSearching = true;
  $scope.isSearching2 = false;
  $scope.isSearching3 = false;
  $scope.newImages = false;
  $scope.newImages2 = false;
  $scope.counting = 0;

      $scope.search = function () {
        $http({
          method: 'GET',
          url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=b84824da1dde88c2406eff7c9168e84e&user_id=136190219%40N07&per_page=12&page=1&format=json&nojsoncallback=1'
        }).success(function (data) {
          console.log(data)
          $scope.results = data.photos.photo;
          $scope.isSearching = false;
        }).error(function (error) {
          console.log(error);
          $scope.isSearching = false;
        })
      }();

      document.addEventListener('scroll', function (event) {
        if (document.body.scrollHeight ==
            document.body.scrollTop +
            window.innerHeight) {

              $scope.isSearching2 = false;
              $scope.newImages = true;
              console.log($scope.newImages)
              // if($scope.counting == 0) {
              //   $scope.counting++;
              // }
              $scope.counting++;
              if($scope.counting == 1) {
                $scope.searchIt = function () {
                  $http({
                    method: 'GET',
                    url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=b84824da1dde88c2406eff7c9168e84e&user_id=136190219%40N07&per_page=12&page=2&format=json&nojsoncallback=1'
                  }).success(function (data) {
                    console.log(data)
                    $scope.results2 = data.photos.photo;
                    $scope.isSearching2 = false;
                  }).error(function (error) {
                    console.log(error);
                    $scope.isSearching2 = false;
                  })
                }();
              }
              console.log($scope.counting);
              // if($scope.counting==1 && $scope.isSearching2 == false) {
              //   $scope.counting++;
              // }

              if($scope.counting == 2) {
                $scope.isSearching3 = false;
                $scope.newImages2 = true;
                $scope.searchItAgain = function () {
                  $http({
                    method: 'GET',
                    url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=b84824da1dde88c2406eff7c9168e84e&user_id=136190219%40N07&per_page=12&page=3&format=json&nojsoncallback=1'
                  }).success(function (data) {
                    console.log(data)
                    $scope.results3 = data.photos.photo;
                    $scope.isSearching3 = false;
                  }).error(function (error) {
                    console.log(error);
                    $scope.isSearching3 = false;
                  })
                }();
                // $scope.counting++;
              }


            }
          })

  })
