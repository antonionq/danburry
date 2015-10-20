var app = angular.module('dburry');

app.controller('adminAppt', function ($scope, apptService) {

  $scope.apptView = apptService.getAppt();
  console.log($scope.apptView)

  apptService.getAppt().then(function(response) {
    $scope.apptView = response.data;
    // console.log($scope.apptView[0]._id)
    console.log($scope.apptView);
  })

  $scope.deleteIt = function (apptId) {
    console.log('hit')
    apptService.deleteAppt(apptId).then(function() {
      location.reload();
    })
  }


});
