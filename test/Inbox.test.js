// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3"); //importing contructor
const web3 = new Web3(ganache.provider());
const { interface, bytecode, nothing } = require("../compile"); // .. is because up one directory
//compile file returns interface and bytecode, using object destructing to get these.

let accounts;
let inbox;
beforeEach(async () => {
  // get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // use on of those accounts to deploy contract.
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] }) // inbox requires string for arguments
    .send({ from: accounts[0], gas: "1000000" }); // one million gas, from first accounts
  //need await because creating the contract takes some ammount of time that is external.
});

describe("Inbox", () => {
  it("has accounts", () => {
    console.log(accounts);
  });
  it("deploys a contract", () => {
    // testing to see if inbox has a contract
    assert.ok(inbox.options.address);
  });
});

/*
class Car {
    park() {
        return 'stopped';
    } 
    
    drive() {
        return 'vroom';
    }
}

let car; // need to initilize outside of a function's scope
beforeEach(() => {
    car = new Car();
});

describe('Car', () => {
    it('can park', () => {
        assert.equal(car.park(), 'stopped');
    });
    it('can drive', () => {
        assert.equal(car.drive(), 'vroom');
    });
     // again can drive is not neccessary we can have whatever.
})// writing out car as first parameter is just for us for readability. 
*/
