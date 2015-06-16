angular.module('digit.game', [])
.controller('GameController', function ($scope, $window, $location, $firebaseObject, Auth, $timeout) {
  $scope.counter = 5;

  

  $scope.countDown = function() {
    $timeout(function() { 
      $scope.counter = $scope.counter - 1;
      if($scope.counter > 0) {
        $scope.countDown();
      } else {
        //send signal to server to begin the game
      }
    }, 1000);
  };


  $scope.generateGame = function() {
    var words = [];
    var testWords = [];
    var str = 'Eolian impinge androgynous ran heliostat Slop chanaan quadrennia proboscidea unrailed Embezzle serpulid unjeered jock pleuritic Chilblained misadvised domicil phocaea appraise Chilo pimelitis oestrogen scalpless serval Tornillo cospar amulet cleverishly cutinising Whort cubiculum unsatiated splenial overstriving Shearless toponym orthostichous fractiousness unremarried Bewhiskered reappropriate synchronized luxuriated extravagating Qsy italianizing foc mobs unmoribund Wolves demodulate microscopical acclivitous eilshemius Condescendent unsomber unreflectingly insatiableness needfire Colorado presumably unreproducible tractrix algerian Cliquing storage synchrocyclotron americanist massoretical Autotoxicosis pollen asherite circumstantiation bonus Freelanced preinsinuative feldschar interaxis altadena Antodontalgic phenyl praiseworthily coronograph intersale Outtrot cowes vlor mediatrix feller Amusia gummosis gittern frowzily untransmigrated Unmuttered erigeron ambitionless chemosurgery gobioid Dubitation cesium yankeedom unvalued unalaska Nonentertaining scissile afghanistan ungrizzled philabeg Gadoid defilable bonspiel nondilatability enforcing Grasper madeline pastrami demulsification biloculate Overagitate delimitate unfanged discarnate ecsc Slating bolger cocksure unemployable diam Icelandic petiolate amyloidosis tracy jeweller Unhatched matronhood snuggle catullus burglarious Tribromoethanol gudrun pleomorphy inapt distinctly Electricity pourer lamentingly sweepstake predemonstrated'; 
      words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
      console.log(i);
      testWords.push([words[i]]);
    }
    console.dir(testWords);
  };

  $scope.generateGame();
  
  $scope.countDown();
});

