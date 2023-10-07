const { ethers } = require('ethers');
const hre = require("hardhat"); 
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/swisstronik.js");

const contractInfo = require("../deployedContracts.json")
require('dotenv').config(); 

async function getStorageValue(contractInformation) {
  try {
    // Load the deployedContracts.json file
    const contractsInfo = contractInformation; 

    // Define the network configurations
    const networkConfigs = {
      polygon_mumbai: {
        providerUrl: process.env.ALCHEMY_API_KEY
      },
      swisstronik: {
        providerUrl: 'https://swisstronik-testnet-rpc-url', 
      },
    };

    // Access the storage variable on both networks
    for (const networkName in contractsInfo) {
      if (contractsInfo.hasOwnProperty(networkName)) {
        const contractInfo = contractsInfo.networkName;
        const { address } = contractInfo;

        const providerUrl = networkConfigs[networkName].providerUrl;
        const provider = new ethers.JsonRpcProvider(providerUrl);

        // Use eth_getStorageAt to retrieve the storage variable (slot 0x0 for the first slot)
        const storageValue = await provider.send('eth_getStorageAt', [address, '0x0', 'latest']);
        console.log(`Storage value on ${networkName} testnet:`, storageValue);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

getStorageValue(contractInfo);
