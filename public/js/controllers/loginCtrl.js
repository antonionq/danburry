var app = angular.module('dburry');

app.controller('loginCtrl', function(adminLoginSrvc, $scope, $location) {
  $scope.user = {name: '', password: ''};

  $scope.loginSubmit = function(user) {
    // console.log(user);

    adminLoginSrvc.loginSubmit(user).then(function(res) {
      // if(res) {
      //   Materialize.toast('Invalid', 3000);
      // }
    }).catch(function(err) {
        Materialize.toast('Invalid', 3000);
    })
  }
})
