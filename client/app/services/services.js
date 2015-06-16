angular.module('digit.services', [])

.factory('Auth', function ($http, $location, $window, $rootScope) {
  var challenges = [];
  var me = {};
  var challenge = {};
  var myResults = {};
  var oppResults = {};
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
    console.log("ME HAS BE SET!!!!!!");
    me = obj;
    console.dir(me);
  };
  var getMe = function() {
    return me;
  };
  var setResultsMe = function(typed, misspelled, arr) {
    console.log("SET RESULTS ME");
    myResults = { 'numWords': typed, 'numWrong': misspelled, 'results': arr};
  };
  var setResultsOpp = function(typed, misspelled, arr) {
    console.log("SET RESULTS OPP");
    oppResults = { 'numWords': typed, 'numWrong': misspelled, 'results': arr};
  };

  var getResultsMe = function() {
    return myResults;
  };
  var getResultsOpp = function() {
    return oppResults;
  };

  var findOpponent = function() {
    for(var key in challenge) {
      if (challenge[key].userid != me.userid) {
        return challenge[key];
      }
    }
    return;
  };
  var comparePlayer = function(obj) {
    challenge = obj;
    for(var key in obj) {
      if (obj[key].userid === me.userid) {
        console.log("YOU WILL BE IN A TYPING MATCH!");
        $location.path('/game');
        $rootScope.$apply(function() {
          console.log('apply the /game location');
          $location.path('/game');
        })
        // return true;
      }
    }
    return false;
  };

  return {
    setResultsMe: setResultsMe,
    setResultsOpp: setResultsOpp,
    getResultsOpp: getResultsOpp,
    getResultsMe: getResultsMe,
    findOpponent: findOpponent,
    comparePlayer: comparePlayer,
    setMe: setMe,
    getMe: getMe,
    addChallenge: addChallenge,
    getChallenges: getChallenges,
    deleteChallenges: deleteChallenges
  }

})
.factory('Game', function ($location, $window) {
  return {};
});