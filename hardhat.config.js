require("@nomicfoundation/hardhat-ignition-ethers");
require("@nomicfoundation/hardhat-toolbox");

const { privateKey, https } = require('./secrets.json')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    optimism: {
      url: https,
      chainId: 11155420,
      accounts: [privateKey]
    }
  }
};
