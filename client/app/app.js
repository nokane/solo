angular.module('digit', [
  'digit.services', 
  'digit.auth',
  'digit.playerList',
  'digit.interface',
  'digit.challenge',
  'digit.game',
  'digit.results',
  'digit.waiting',
  'firebase',
  'ui.router'
])
.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('signin');
  $stateProvider
    .state('signin', {
      url: '/signin',
      templateUrl: 'app/auth/signin.html'
    })
    .state('interface', {
      url: '/interface',
      templateUrl: 'app/interface/interface.html'
    })
    .state('interface.playerList', {
      url: '/playerList',
      templateUrl: 'app/interface/playerList.html'
    })
    .state('interface.challenge', {
      url: '/challenge',
      templateUrl: 'app/interface/challenge.html'
    })
    .state('interface.waiting', {
      url: '/waiting',
      templateUrl: 'app/interface/waiting.html'
    })
    .state('game', {
      url: '/game',
      templateUrl: 'app/game/game.html'
    })
    .state('results', {
      url: '/results',
      templateUrl: 'app/results/results.html'
    });
  
})