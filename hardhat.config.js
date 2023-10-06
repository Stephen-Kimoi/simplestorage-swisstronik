require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config(); 

module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {}, 
    polygon_mumbai: {
      url: process.env.ALCHEMY_API_KEY, 
      accounts: [process.env.PRIVATE_KEY]
    },
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: '0.8.0',
  },
};
