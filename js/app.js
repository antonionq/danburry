var app = angular.module('dburry', ['ngRoute', 'ui.materialize', 'uiGmapgoogle-maps', 'ngMaterial']);

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
    templateUrl: 'js/view/contact.html',
    controller: 'homeCtrl'
  })
  .when('/appointment', {
    templateUrl: 'js/view/appointment.html'
  })
  .when('/media', {
    templateUrl: 'js/view/media.html',
    controller: 'flickr'
  })
  .otherwise('/home')
})
