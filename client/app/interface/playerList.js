angular.module('digit.playerList', [])
.controller('PlayerListController', function ($scope, $window, $location, $firebaseObject, Auth) {

  $scope.users = {};
  $scope.me = Auth.getMe();
  $scope.displayLoggedIn = function() {
    var loggedIn = new Firebase("https://dazzling-inferno-751.firebaseio.com/presence/");
    var syncObject = $firebaseObject(loggedIn);
    console.log("THIS IS THE SYNC OBJECT");
    console.dir(syncObject);
    syncObject.$bindTo($scope,"users");
  };
  $scope.challenge = function(userid, name) {
    console.log("I CHALLENGE YOU")
    console.log(userid);
    var sendChallenge = new Firebase('https://dazzling-inferno-751.firebaseio.com/challenge/'+userid);
    // var receiveChallenge = $firebaseObject(sendChallenge);
    var newChallenge = sendChallenge.push({'recipient' : { 'userid': userid, 'username': name }, 'challenger' : $scope.me});
    Auth.sentChallenge({'userid': userid, 'username': name });
    $location.path('/interface/waiting');
  };

  $scope.displayLoggedIn();
});

