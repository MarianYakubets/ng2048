describe('.buildEmptyGameBoard', function() {
  var nullArr;

  beforeEach(function() {
    nullArr = [];
    for (var x = 0; x < 16; x++) {
      nullArr.push(null);
    }
  })
  it('должен заполнить сетку нулями', function() {
    var grid = [];
    for (var x = 0; x < 16; x++) {
      grid.push(x);
    }
    gridService.grid = grid;
    gridService.buildEmptyGameBoard();
    expect(gridService.grid).toEqual(nullArr);
  });
  it('должен заполнить плитки нулями', function() {
    var tiles = [];
    for (var x = 0; x < 16; x++) {
      tiles.push(x);
    }
    gridService.tiles = tiles;
    gridService.buildEmptyGameBoard();
    expect(gridService.tiles).toEqual(nullArr);
  });
});