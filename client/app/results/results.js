angular.module('digit.results', [])
.controller('ResultsController', function ($scope, $window, $location, $firebaseObject, Auth) {
  $scope.myResults = Auth.getResultsMe();
  $scope.oppResults = Auth.getResultsOpp();
  $scope.me = Auth.getMe();
  $scope.challenger = Auth.findOpponent();
  $scope.myWPM = $scope.myResults.numWords - $scope.myResults.numWrong;
  $scope.oppWPM = $scope.oppResults.numWords - $scope.oppResults.numWrong;
  $scope.winner = '';
  $scope.calculateResults = function() {
    if($scope.myWPM > $scope.oppWPM) {
      $scope.winner = 'YOU (' + $scope.me.username + ") ARE THE WINNER! You are a faster typer than " + $scope.challenger.username;
    } else if( $scope.oppWPM > $scope.myWPM) {
      $scope.winner = 'YOU (' + $scope.me.username + ") ARE THE LOSER! You are a slower typer than " + $scope.challenger.username;
    } else {
      $scope.winner = 'YOU (' + $scope.me.username + ") have tied " + $scope.challenger.username + " in the Typing Speed Challenge";
    }  

    console.log($scope.winner);
  };

  $scope.calculateResults();

  console.log()

});
