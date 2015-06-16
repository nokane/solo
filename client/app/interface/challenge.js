angular.module('digit.challenge', [])
.controller('ChallengeController', function ($scope, $window, $location, $firebaseObject, Auth) {

  $scope.challenger = undefined;
  $scope.challenger = Auth.getChallenges()[0].challenger;
  $scope.challengerName = '';
  $scope.challengerName = $scope.challenger;
  console.log('INSIDE THE CHALLENGE CONTROLLER', $scope.challenger);
  $scope.accept = function() {
    //start the game between the two players
  }
});

