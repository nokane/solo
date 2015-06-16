angular.module('digit.auth', [])
.controller('AuthController', function ($scope, $window, $location, Auth, $firebaseAuth,$firebaseObject, $rootScope) {

  var ref = new Firebase("https://dazzling-inferno-751.firebaseio.com");
  
  $scope.authObj = $firebaseAuth(ref);
  $scope.challenger = {};
  $scope.uid = undefined;
  $scope.signin = function() {
    $scope.authObj.$authWithOAuthPopup("github").then(function(authData) {
      console.log("Logged in as:", authData.uid);
      console.dir(authData);

      var user = new Firebase('https://dazzling-inferno-751.firebaseio.com/users/');
      var insertUser = user.push();

      insertUser.set(authData.github);
      var amOnline = new Firebase('https://dazzling-inferno-751.firebaseio.com/.info/connected');
      var userRef = new Firebase('https://dazzling-inferno-751.firebaseio.com/presence/' + authData.uid);
      amOnline.on('value', function(snapshot) {
        if (snapshot.val()) {
          $scope.uid = authData.uid;
          userRef.onDisconnect().remove();
          authData.presence = true;
          userRef.set(authData.github);
          var deleteChallenges = new Firebase('https://dazzling-inferno-751.firebaseio.com/challenge/'+authData.uid);
          deleteChallenges.remove();
          var challengeLoc = new Firebase('https://dazzling-inferno-751.firebaseio.com/challenge/'+authData.uid);
          var receiveChallenge = $firebaseObject(challengeLoc);
          Auth.setMe({'userid': authData.uid, 'username': authData.github.username});
          challengeLoc.on('child_added', function(childSnapshot, prevChildKey) {
            console.log("YOU HAVE BEEN CHALLENGED BY:", childSnapshot.val());
            $scope.challenger = childSnapshot.val();
            Auth.addChallenge(childSnapshot.val());
            $rootScope.$broadcast('newChallenge');
          });
          receiveChallenge.$bindTo($scope,"challenge");
        }
      });




      $window.localStorage.setItem('digit', authData.token);
      $location.path('/interface/playerList');
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  }

});
