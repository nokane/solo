angular.module('digit.services', [])

.factory('Auth', function ($http, $location, $window) {
  var challenges = [];
  var me = {};

  var addChallenge = function(obj) {
    challenges.push(obj);
  };
  var getChallenges = function() {
    return challenges;
  };
  var deleteChallenges = function() {
    console.log("CHALLENGE WAS DELETED!!!");
    challenges = [];
  };
  var setMe = function(obj) {
    me = obj;
  };
  var getMe = function() {
    return me;
  }

  
  return {
    setMe: setMe,
    getMe: getMe,
    addChallenge: addChallenge,
    getChallenges: getChallenges,
    deleteChallenges: deleteChallenges
  };
});