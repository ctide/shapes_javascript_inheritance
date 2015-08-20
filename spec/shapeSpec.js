var Shape = require("../src/shape");
var shape;

describe("Shape", function() {
  beforeEach(function() {
    shape = new Shape(1, "red");
  });

  describe("Area", function() {
    it("should should be 0 for this abstract shape", function() {
      expect(shape.area()).toEqual(0);
    });
  });

  describe('Draw', function() {
    it ('should return a string for abstract shapes', function() {
      expect(shape.draw()).toEqual('A shape with 1 sides');
    });
  })

  describe('toString', function() {
    it ('should describe the shape', function() {
      expect(shape.toString()).toEqual('[Shape sides:1, color:red]');
    })
  });

  describe('getRGB', function() {
    it ('should return rgb(255,0,0) for a red shape', function() {
      expect(shape.getRGB()).toEqual('rgb(255,0,0)');
    })
  })

});
