angular.module('digit.game', [])
.controller('GameController', function ($scope, $window, $location, $firebaseObject, Auth, $timeout) {
  $scope.counter = 5;
  $scope.meCorrect = 0;
  $scope.meWrong = 0;
  $scope.oppCorrect = 0;
  $scope.oppWrong = 0;
  $scope.meCounterShow = false;
  $scope.testWords = [];
  $scope.typedWord = '';
  $scope.currentWord = '';
  $scope.gameWords = [];
  $scope.gameBegan = false;
  $scope.currCount = 0;
  $scope.mustShow = true;
  $scope.completedWords = [];
  $scope.countDown = function() {
    $timeout(function() { 
      $scope.counter = $scope.counter - 1;
      if($scope.counter > 0) {
        $scope.countDown();
      } else {
        $scope.mustShow = false;
        $scope.meCounterShow = true;
        $scope.gameBegan = true;
        //send signal to server to begin the game
        $scope.gameWords = $scope.testWords.slice();
        $scope.currentWord = $scope.gameWords[$scope.currCount][0];
        //start game timer;

      }
    }, 1000);
  };


  $scope.generateGameWords = function() {
    var words = [];
    var testWords = [];
    var str = 'Eolian impinge androgynous ran heliostat Slop chanaan quadrennia proboscidea unrailed Embezzle serpulid unjeered jock pleuritic Chilblained misadvised domicil phocaea appraise Chilo pimelitis oestrogen scalpless serval Tornillo cospar amulet cleverishly cutinising Whort cubiculum unsatiated splenial overstriving Shearless toponym orthostichous fractiousness unremarried Bewhiskered reappropriate synchronized luxuriated extravagating Qsy italianizing foc mobs unmoribund Wolves demodulate microscopical acclivitous eilshemius Condescendent unsomber unreflectingly insatiableness needfire Colorado presumably unreproducible tractrix algerian Cliquing storage synchrocyclotron americanist massoretical Autotoxicosis pollen asherite circumstantiation bonus Freelanced preinsinuative feldschar interaxis altadena Antodontalgic phenyl praiseworthily coronograph intersale Outtrot cowes vlor mediatrix feller Amusia gummosis gittern frowzily untransmigrated Unmuttered erigeron ambitionless chemosurgery gobioid Dubitation cesium yankeedom unvalued unalaska Nonentertaining scissile afghanistan ungrizzled philabeg Gadoid defilable bonspiel nondilatability enforcing Grasper madeline pastrami demulsification biloculate Overagitate delimitate unfanged discarnate ecsc Slating bolger cocksure unemployable diam Icelandic petiolate amyloidosis tracy jeweller Unhatched matronhood snuggle catullus burglarious Tribromoethanol gudrun pleomorphy inapt distinctly Electricity pourer lamentingly sweepstake predemonstrated'; 
      words = str.split(" ");
    for (var i = 0; i < 100; i++) {
      console.log(i);
      testWords.push([words[i]]);
    }
    $scope.testWords = testWords.slice();
    console.dir(testWords);
  };

  $scope.renderGamewords = function() {
  
  };

  $scope.spacePressed = function() {
    if($scope.gameBegan) {
      $scope.gameWords[$scope.currCount].push($scope.typedWord);
      console.log("compare words",$scope.gameWords[$scope.currCount]);
      if ($scope.gameWords[$scope.currCount][0] === $scope.gameWords[$scope.currCount][1]) {
        $scope.meCorrect += 1;
        $scope.gameWords[$scope.currCount].push(true);
        $scope.gameWords[$scope.currCount].push('correctWord');
      } else {
        $scope.meWrong += 1;
        $scope.gameWords[$scope.currCount].push(false);
        $scope.gameWords[$scope.currCount].push('wrongWord');
      }
      $scope.completedWords.push($scope.gameWords[$scope.currCount]);
      $scope.typedWord = '';
      $scope.currCount += 1;
      $scope.currentWord = $scope.gameWords[$scope.currCount][0];
    }
  };

  

  $scope.generateGameWords();
  // $scope.renderGameWords();
  $scope.countDown();
});

