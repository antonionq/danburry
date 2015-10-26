var app = angular.module('dburry');

app.controller('adminAppt', function ($scope, apptService, adminLoginSrvc, adminMaintain) {

  $scope.getUsername = function() {
    adminLoginSrvc.getUsername().then(function(response) {
      $scope.user = response.data
      console.log($scope.user)
    })
  }
  // $scope.user = getAdmin;
  console.log($scope.user)
  $scope.apptView = apptService.getAppt();
  // console.log($scope.apptView)

  apptService.getAppt().then(function(response) {
    $scope.apptView = response.data;
    // console.log($scope.apptView[0]._id)
    // console.log($scope.apptView);
  })

  $scope.deleteIt = function (apptId) {
    apptService.deleteAppt(apptId).then(function() {
      location.reload();
    })
  }

  $scope.hoursAndTime2 = {};

  adminMaintain.getHoursAndTime().then(function(res) {
    $scope.hoursAndTime2 = res.data;
  })

  $scope.updateInfo = function(hours) {
    adminMaintain.updateInfo(hours).then(function(res) {
      Materialize.toast('Successfully Changed', 3000);
    })
  }

  // adminLoginSrvc.getUsername().then(function(res) {
  //   $scope.adminName = res.data.name;
  // })


});
