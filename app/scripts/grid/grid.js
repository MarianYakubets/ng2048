angular.module('Grid', [])
	.factory('TileModel', function() {
		var Tile = function(pos, val) {
			this.x = pos.x;
			this.y = pos.y;
			this.value = val || 2;
		};

		return Tile;
	})
	.service('GridService', function() {
		this.tiles = [];
		this.tiles.push(new TileModel({
			x: 1,
			y: 1
		}, 2));
		this.tiles.push(new TileModel({
			x: 1,
			y: 2
		}, 2));
		this.grid = [];
		this.size = 4;

		this.buildEmptyGameBoard = function() {
			var self = this;
			// Initialize our grid
			for (var x = 0; x < service.size * service.size; x++) {
				this.grid[x] = null;
			}


			//Fill with empty objects
			this.forEach(function(x, y) {
				self.setCellAt({
					x: x,
					y: y
				}, null);
			});
		};
		// Запускать для каждого элемента массива плиток
		this.forEach = function(cb) {
			var totalSize = this.size * this.size;
			for (var i = 0; i < totalSize; i++) {
				var pos = this._positionToCoordinates(i);
				cb(pos.x, pos.y, this.tiles[i]);
			}
		};

		// Установить ячейку на позиции
		this.setCellAt = function(pos, tile) {
			if (this.withinGrid(pos)) {
				var xPos = this._coordinatesToPosition(pos);
				this.tiles[xPos] = tile;
			}
		};

		// Запросить ячейку с позиции
		this.getCellAt = function(pos) {
			if (this.withinGrid(pos)) {
				var x = this._coordinatesToPosition(pos);
				return this.tiles[x];
			} else {
				return null;
			}
		};

		// Находится ли позиция в границах нашей сетки
		this.withinGrid = function(cell) {
			return cell.x >= 0 && cell.x < this.size &&
				cell.y >= 0 && cell.y < this.size;
		};

		// Преобразование x в x,y
		this._positionToCoordinates = function(i) {
			var x = i % service.size,
				y = (i - x) / service.size;
			return {
				x: x,
				y: y
			};
		};

		// Преобразование координат в индекс
		this._coordinatesToPosition = function(pos) {
			return (pos.y * service.size) + pos.x;
		};
	});