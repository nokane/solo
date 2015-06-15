angular.module('digit', [
  'digit.services', 
  'digit.auth',
  'digit.interface',
  'firebase',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/interface', {
      templateUrl: 'app/interface/interface.html',
      controller: 'InterfaceController'
    })
    .otherwise({ redirectTo: '/signin'})

})