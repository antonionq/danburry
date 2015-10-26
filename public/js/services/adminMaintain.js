var app = angular.module('dburry');

app.service('adminMaintain', function($http, $location) {
  this.getHoursAndTime = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:9999/admin/edit'
    })
  }

  this.updateInfo = function(info) {
    console.log("srvc", info)
    return $http({
      method: 'PUT',
      url: 'http://localhost:9999/admin/edit/' + info._id,
      data: info
    }).then(function(res) {
      console.log(res)
      return res.data;
    })
  }
});
