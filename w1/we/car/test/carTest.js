const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function () { // 3

  it("should return false if it's a hatchback", function () { // 4
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});

describe("#shouldBuyCar()", function () { // 3

  it("should return true if color is pink", function () { // 4
    const car = {
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
});

describe("#shouldBuyCar()", function () { // 3

  it("should return false if color is pink but it is a Hatchback", function () { // 4
    const car = {
      color: "pink",
      type: 'hatchback'
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});