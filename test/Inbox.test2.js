const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3"); //importing contructor
const web3 = new Web3(ganache.provider());

class Car {
  park() {
    return "stopped";
  }

  drive() {
    return "vroom";
  }
}

describe("for me to look at", () => {
  it("testing park", () => {
    const car = new Car();
    assert.equal(car.park(), "stopped");
  });
});
