var app = angular.module('dburry');

app.controller('homeCtrl', function($scope, $log, $timeout, adminMaintain){
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

      $scope.hoursAndTime = {};

      adminMaintain.getHoursAndTime().then(function(res) {
        $scope.hoursAndTime = res.data;
      })

});
