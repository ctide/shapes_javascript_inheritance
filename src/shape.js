function Shape(sides, color) {
  this.sides = sides;
  this.color = color;
}

Shape.prototype.type = 'abstract';

Shape.prototype.area = function() {
  return 0;
};

Shape.prototype.perimeter = function() {
  return 0;
};

// Should return an assci version of the shape.  Since the shape
// doesn't make sense here, we return a string.
Shape.prototype.draw = function() {
   return "A shape with " + this.sides + " sides";
};

Shape.prototype.toString = function() {
  return "[Shape sides:" + this.sides + ", color:" + this.color +"]"
};

Shape.prototype.getRGB = function() {
  // Return the rgb value (as a string) for the color you've selected.
  // You can have a preset list of colors that you switch on.
  if (this.color == 'red') {
    return 'rgb(255,0,0)';
  } else if (this.color == 'blue') {
    return 'rgb(0,0,255)';
  } else if (this.color == 'green') {
    return 'rgb(0,255,0)';
  } else {
    return "rgb(0,0,0)";
  }
}

module.exports = Shape;
