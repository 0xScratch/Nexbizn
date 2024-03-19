require("@nomicfoundation/hardhat-ignition-ethers");
require("@nomicfoundation/hardhat-toolbox");

const { privateKey } = require('./secrets.json')
const { hardPrivateKey } = require('./secrets.json')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    moonbase: {
      url: 'https://moonbase-alpha.blastapi.io/5fbc6157-38f8-481c-a84b-5cf5c431f2bc',
      chainId: 1287,
      accounts: [privateKey]
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337,
      accounts: [hardPrivateKey]
    }
  }
};
