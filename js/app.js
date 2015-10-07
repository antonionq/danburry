var app = angular.module('dburry', ['ngRoute', 'ui.materialize']);

app.config(function ($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'js/view/home.html',
    controller: 'homeCtrl'
  })
  .when('/about', {
    templateUrl: 'js/view/about.html'
  })
  .when('/prices', {
    templateUrl: 'js/view/pricing.html'
  })
  .when('/contact', {
    templateUrl: 'js/view/contact.html'
  })
  .when('/appointment', {
    templateUrl: 'js/view/appointment.html'
  })
  .when('/media', {
    templateUrl: 'js/view/media.html'
  })
  .otherwise('/home')
})
