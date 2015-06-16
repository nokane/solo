angular.module('digit.interface', [])
.controller('InterfaceController', function ($scope, $window, $location, $firebaseObject, Auth) {
  // Auth.get
  $scope.challenger = {};
  $scope.$on('newChallenge', function() {
    console.log("THE INTERFACE CONTROLLER HEARD THERE IS A NEW CHALLENGE");
    $scope.challenger = Auth.getChallenges()[0].challenger;
    console.log("YOUR CHALLENGER:", $scope.challenger);
    // Auth.deleteChallenges();
    $location.path('/interface/challenge');
  })
  
});
