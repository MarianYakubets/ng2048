describe('Game module', function() {
  describe('GameManager', function() {
    beforeEach(module('Game'));

    var gameManager; // instance of the GameManager
 	beforeEach(inject(function(GameManager) {
    	gameManager = GameManager;
    });

     beforeEach(module(function($provide) {
    _gridService = {
      anyCellsAvailable: angular.noop,
      tileMatchesAvailable: angular.noop
    };

    $provide.value('GridService', _gridService);
	describe('.movesAvailable', function() {
    it('should report true if there are cells available', function() {
    	spyOn(_gridService, 'anyCellsAvailable').andReturn(true);
    	expect(gameManager.movesAvailable()).toBeTruthy();
 	});

 	it('must return true, if there are suitable cells', function() {
  		spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
  		spyOn(_gridService, 'tileMatchesAvailable').andReturn(true);
  		expect(gameManager.movesAvailable()).toBeTruthy();
	});

	it('must return false, if there are no suitable cells', function() {
  		spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
  		spyOn(_gridService, 'tileMatchesAvailable').andReturn(false);
  		expect(gameManager.movesAvailable()).toBeFalsy();
	});

  });
});