const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require(",/compile");

const provider = new HDWalletProvider(
  "cat olive collect control argue soup blur equip cat luxury clump enemy",
  "https://rinkeby.infura.io/v3/78f48b1d5203439caaeb5c9cd4156ab1"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
};
// deploy code will go here
