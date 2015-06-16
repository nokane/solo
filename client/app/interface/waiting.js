angular.module('digit.waiting', [])
.controller('WaitingController', function ($scope, $window, $location, $firebaseObject, Auth) {
  console.log("I CHALLENGED YOU!", Auth.iChallenged());
  $scope.challenger = Auth.iChallenged().username
});
