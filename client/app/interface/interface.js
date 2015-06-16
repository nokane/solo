angular.module('digit.interface', [])
.controller('InterfaceController', function ($scope, $window, $location, $firebaseObject, Auth) {
  // Auth.get
  $scope.challenger = {};
  $scope.me = Auth.getMe();
  $scope.actualChallenge = undefined;
  $scope.$on('newChallenge', function() {
    console.log("THE INTERFACE CONTROLLER HEARD THERE IS A NEW CHALLENGE");
    $scope.challenger = Auth.getChallenges()[0].challenger;
    console.log("YOUR CHALLENGER:", $scope.challenger);
    // Auth.deleteChallenges();
    $location.path('/interface/challenge');
  });
  var beginGame = new Firebase("https://dazzling-inferno-751.firebaseio.com/newgame/");
  beginGame.on('child_added', function(childSnapshot, prevChildKey) {
    console.log('THE GAME IS ABOUT TO BEGIN!!!!');
    var deleteChallenge = new Firebase('https://dazzling-inferno-751.firebaseio.com/newgame');
    deleteChallenge.remove();
    if(Auth.comparePlayer(childSnapshot.val()[0])) {
      $location.path('/game');
    }

  });
  
});
