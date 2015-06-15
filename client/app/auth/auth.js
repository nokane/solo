angular.module('digit.auth', [])
.controller('AuthController', function ($scope, $window, $location, Auth, $firebaseAuth) {
  $scope.user = {};

  var ref = new Firebase("https://dazzling-inferno-751.firebaseio.com");
  
  $scope.authObj = $firebaseAuth(ref);

  $scope.signin = function() {
    $scope.authObj.$authWithOAuthPopup("github").then(function(authData) {
      console.log("Logged in as:", authData.uid);
      console.dir(authData);      
    }).catch(function(error) {
      console.error("Authentication failed:", error);

    });
  }


 
});
