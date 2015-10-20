var app = angular.module('dburry');

app.service('apptService', function($q, $http){
        this.addAppt = function(data){
          return $http ({
            method: 'POST',
            url: 'http://localhost:9999/appointments',
            data: data
          }).then(function(res) {
            console.log(res)
          })
        };

        this.getAppt = function(){
          return $http ({
            method: 'GET',
            url: 'http://localhost:9999/admin/appointments'
          })
        };

        this.deleteAppt = function (apptId) {
          return $http ({
            method: 'DELETE',
            url: 'http://localhost:9999/admin/appointments/' + apptId
          }).then(function(res) {
            // console.log(res)
          })
        };
});
