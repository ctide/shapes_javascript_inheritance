var Rectangle = require("./rectangle");
var Shape = require('./shape');

function Square(sideLength, color) {
  Rectangle.call(this, sideLength, sideLength, color);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.type = Shape.prototype.type;

Square.prototype.toString = function() {
  return '[Square sideLengths:' + this.side1 + ', color: ' + this.color + ']';
}
module.exports = Square;
