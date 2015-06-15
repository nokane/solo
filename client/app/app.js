angular.module('digit', [
  'digit.services', 
  'digit.auth',
  'firebase',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .otherwise({ redirectTo: '/signin'})

})