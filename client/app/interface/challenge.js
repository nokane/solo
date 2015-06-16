angular.module('digit.challenge', [])
.controller('ChallengeController', function ($scope, $window, $location, $firebaseObject, Auth) {
  
  $scope.challenger = undefined;
  $scope.challenger = Auth.getChallenges()[0].challenger;
  $scope.challengerName = '';
  $scope.challengerName = $scope.challenger;
  console.log('INSIDE THE CHALLENGE CONTROLLER', $scope.challenger);
  
  var oppResults = new Firebase("htts://dazzling-inferno-751.firebaseio.com/gameresults/1/");
  oppResults.remove();

  $scope.accept = function() {
    //start the game between the two players
    console.log('challenge has been accepted', $scope.challenger.username );
    console.log($scope.challenger.username + 'beginGame');
    var acceptChallenge = new Firebase("https://dazzling-inferno-751.firebaseio.com/newgame/");
    var sendReady = acceptChallenge.push(Auth.getChallenges());
  }
});

