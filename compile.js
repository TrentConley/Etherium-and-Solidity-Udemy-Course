// compile code will go here
const path = require('path'); //using path module, will generate valid path on mac or windows os
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');  
// dirname is constant that is defined by a node and always get set to current working directory

const source = fs.readFileSync(inboxPath, 'utf8');
// gets source code.

module.exports = solc.compile(source, 1).contracts[':Inbox']; //second parameter is number of contracts that we are attempting to compile, in this case is 1. 
// only returning the definition of the contract inbox. 
