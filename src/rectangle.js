var Shape = require("./shape");

function Rectangle(side1, side2, color) {
  Shape.call(this, 4, color);
  this.side1 = side1;
  this.side2 = side2;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.side1 * this.side2;
}

Rectangle.prototype.perimeter = function() {
  return this.side1 * 2 + this.side2 * 2;
}

Rectangle.prototype.toString = function() {
  return '[Rectangle sideLengths: ' + this.side1 + ' and ' + this.side2 + ', color: ' + this.color + ']';
}

Rectangle.prototype.drawLine = function(beforeChar, string, afterChar) {
  var output = beforeChar;
  for (var i = 0; i < (this.side2); i++) {
    output += string;
  }
  return output + afterChar;
}

Rectangle.prototype.draw = function() {
  var output = this.drawLine("\n _", '__', "\n");

  for (var i = 0; i < this.side1; i++) {
    output += this.drawLine('| ', '* ', "|\n");
  }

  return output + this.drawLine(' ', '--', '-\n');
}

module.exports = Rectangle;