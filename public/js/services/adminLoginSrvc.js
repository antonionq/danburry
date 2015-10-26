var app = angular.module('dburry');

app.service('adminLoginSrvc', function($http, $location) {
  this.loginSubmit = function(user) {
    return $http({
      method: 'POST',
      url: 'http://localhost:9999/login',
      data: user
    }).then(function(res) {
      $location.path('/admin/appointments')
    })
  }
  this.getUsername = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:9999/user'
    })
    // .then(function(res, err) {
    //   if(err) return err;
    //   else return res;
    // })
  }
})
