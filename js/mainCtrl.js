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

// app.controller('demo', ['$scope','imageService','angularGridInstance', function ($scope,imageService,angularGridInstance) {
//    imageService.loadImages().then(function(data){
//         data.data.items.forEach(function(obj){
//             var desc = obj.description,
//                 width = desc.match(/width="(.*?)"/)[1],
//                 height = desc.match(/height="(.*?)"/)[1];
//
//             obj.actualHeight  = height;
//             obj.actualWidth = width;
//         });
//        $scope.pics = data.data.items;
//
//        $scope.refresh = function(){
//             angularGridInstance.gallery.refresh();
//        }
//     });;
// }]);

app.controller('flickr', function ($scope, $http) {
  $scope.results = [];
  $scope.isSearching = true;

      $scope.search = function () {
        $http({
          method: 'GET',
          url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=76c7657556317699c19193988f98bc45&user_id=136190219%40N07&format=json&nojsoncallback=1&auth_token=72157657452463623-6b85b7db5b3c6555&api_sig=b1269834b1fad1f89d2b2c5e36275d11'
          // params: {
          //   method: 'flickr.people.getPhotos',
          //   api_key: 'e8c1cde8c2a105921177cec181b9f7db',
          //   user_id: '136173999@N07',
          //   format: 'json',
          //   nojsoncallback: 1
          // }
        }).success(function (data) {
          console.log(data)
          $scope.results = data.photos.photo;
          $scope.isSearching = false;
        }).error(function (error) {
          console.log(error);
          $scope.isSearching = false;
        })
      }();
})
