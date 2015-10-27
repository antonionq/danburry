var app = angular.module('dburry');

app.controller('flickr', function ($scope, $http, flickrSrvc) {
  $scope.results = [];
  $scope.results2 = [];
  $scope.results3 = [];
  $scope.isSearching = true;
  $scope.isSearching2 = false;
  $scope.isSearching3 = false;
  // $scope.isSearching2 = true;
  // $scope.isSearching3 = true;
  $scope.newImages = false;
  $scope.newImages2 = false;
  $scope.counting = 0;


      flickrSrvc.getPageOne().then(function(res, err) {
        $scope.results = res.data.photos.photo;
        $scope.isSearching = false;
      })

      document.addEventListener('scroll', function (event) {
        if (document.body.scrollHeight ==
            document.body.scrollTop +
            window.innerHeight) {

              $scope.isSearching2 = false;
              $scope.newImages = true;
              $scope.counting++;

              if($scope.counting==1) {
                flickrSrvc.getPageTwo().then(function(res) {
                  $scope.results2 = res.data.photos.photo;
                })
              }
              if($scope.counting==2) {
                $scope.newImages2 = true;
                flickrSrvc.getPageThree().then(function(res) {
                  $scope.results3 = res.data.photos.photo;
                })
              }
            }
      })

  })
