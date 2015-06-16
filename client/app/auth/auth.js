angular.module('digit.auth', [])
.controller('AuthController', function ($scope, $window, $location, Auth, $firebaseAuth) {

  var ref = new Firebase("https://dazzling-inferno-751.firebaseio.com");
  
  $scope.authObj = $firebaseAuth(ref);

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
          userRef.onDisconnect().remove();
          authData.presence = true;
          userRef.set(authData);
        }
      });


      $window.localStorage.setItem('digit', authData.token);
      $location.path('/interface/playerList');
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  }

});
