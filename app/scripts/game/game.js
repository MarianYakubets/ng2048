angular.module('Game', [])
.service('GameManager', function() {
  // Создать новую игру
  this.newGame = function() {};
  // Обработка хода
  this.move = function() {};
  // Обновление очков
  this.updateScore = function(newScore) {};
  // Остались ли ещё ходы?
  this.movesAvailable = function() {
    return GridService.anyCellsAvailable() ||
      GridService.tileMatchesAvailable();
  };
});
