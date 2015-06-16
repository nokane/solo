angular.module('digit.playerList', [])
.controller('PlayerListController', function ($scope, $window, $location, $firebaseObject) {


  //var loggedIn = new Firebase("https://dazzling-inferno-751.firebaseio.com/presence/");
  $scope.users = {};
  $scope.displayLoggedIn = function() {
    var loggedIn = new Firebase("https://dazzling-inferno-751.firebaseio.com/presence/");
    var syncObject = $firebaseObject(loggedIn);
    console.log("THIS IS THE SYNC OBJECT");
    console.dir(syncObject);
    syncObject.$bindTo($scope,"users");
  };
  $scope.challenge = function() {

  };

  $scope.displayLoggedIn();
});


// /app.controller("SampleCtrl", function($scope, $firebaseObject) {
//   var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/data");
//   // download the data into a local object
//   var syncObject = $firebaseObject(ref);
//   // synchronize the object with a three-way data binding
//   // click on `index.html` above to see it used in the DOM!
//   syncObject.$bindTo($scope, "data");
// });/
