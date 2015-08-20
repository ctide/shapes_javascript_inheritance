var Rectangle = require("../src/rectangle");
var rectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle(4, 6, "blue");
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
    });
  });

  describe("Perimeter", function() {
    it("should be 20 for a rectangle with side lengths 4, 6", function() {
      expect(rectangle.perimeter()).toEqual(20);
    });
  });

  describe('toString', function() {
    it ('should describe the shape', function() {
      expect(rectangle.toString()).toEqual('[Rectangle sideLengths: 4 and 6, color: blue]');
    })
  });

  describe('toRGB', function() {
    it ('should return rgb(0,0,255) for a blue shape', function() {
      expect(rectangle.getRGB()).toEqual('rgb(0,0,255)');
    })
  })

  describe("draw", function() {
    it("should return an assci version of this abstract shape", function() {
      expect(rectangle.draw()).toEqual(
        "\n"+
        " _____________\n"+
        "| * * * * * * |\n"+
        "| * * * * * * |\n"+
        "| * * * * * * |\n"+
        "| * * * * * * |\n"+
        " -------------\n"+
        "");
    });
  });
});
