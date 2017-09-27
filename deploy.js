#!/usr/bin/env node

// run chmod +x deploy.js in terminal to make executable
// then can type ./deploy.js (eg hit tab to autofill)
const Web3 = require('web3')
const solc = require('solc')
const fs = require('fs')

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
console.log(web3.eth.accounts)
// run web3.eth.accounts in repl to check

const code = fs.readFileSync('voting.sol').toString()
const compiledCode = solc.compile(code)
console.log(compiledCode)

// const abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
// const VotingContract = web3.eth.contract(abiDefinition)
// const byteCode = compiledCode.contracts[':Voting'].bytecode
// const deployedContract = VotingContract.new(['Rama', 'Nick', 'Jose'], { data: byteCode, from: web3.eth.accounts[0], gas: 4700000 })
// const deployedContract.address
// const contractInstance = VotingContract.at(deployedContract.address)
