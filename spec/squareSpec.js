var Square = require("../src/square");
var square;

describe("Square", function() {
  beforeEach(function() {
    square = new Square(2, "green");
  });

  describe("Area", function() {
    it("should be 4 for a square", function() {
      expect(square.area()).toEqual(4);
    });
  });

  describe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.perimeter()).toEqual(8);
    });
  });

  describe('toString', function() {
    it ('should describe the square', function() {
      expect(square.toString()).toEqual('[Square sideLengths:2, color: green]');
    })
  });

  describe('toRGB', function() {
    it ('should return rgb(0,255,0) for a green shape', function() {
      expect(square.getRGB()).toEqual('rgb(0,255,0)');
    })
  })
});
