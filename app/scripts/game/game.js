angular.module('Game', [])
.service('GameManager', function() {
  this.newGame = function() {};
  this.move = function() {};
  this.updateScore = function(newScore) {};
  this.movesAvailable = function() {
    return GridService.anyCellsAvailable() ||
      GridService.tileMatchesAvailable();
  };
});
