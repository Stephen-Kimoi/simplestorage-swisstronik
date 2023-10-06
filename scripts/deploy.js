const { ethers } = require('hardhat');
const hre = require("hardhat"); 
const fs = require("fs"); 

async function main() {
  // Deploy to Mumbai testnet
  console.log('Deploying to Mumbai testnet...');
  const mumbaiContract = await deployToNetwork('polygon_mumbai');

  // Deploy to Swisstronik testnet
  console.log('Deploying to Swisstronik testnet...');
  const swisstronikContract = await deployToNetwork('swisstronik');

  // Create a JSON file with contract addresses and ABIs
  const contractsInfo = {
    mumbai: {
      address: mumbaiContract.address,
      abi: mumbaiContract.interface.format('json'),
    },
    swisstronik: {
      address: swisstronikContract.target,
      abi: swisstronikContract.interface.format('json'),
    },
  };

  fs.writeFileSync('deployedContracts.json', JSON.stringify(contractsInfo, null, 2));
  console.log('Deployed contract addresses and ABIs saved to deployedContracts.json');
}

async function deployToNetwork(networkName) {
  if (networkName === "polygon_mumbai") {
    const contractInstance = await ethers.getContractFactory("SimpleStorage")
    const simpleStorage = await contractInstance.deploy("SimpleStorage", ["First Data"]); 
    await simpleStorage.waitForDeployment(); 

    console.log(`SimpleStorage contract in  ${networkName} address: `, simpleStorage.target);
    return simpleStorage;

  } else if (networkName === "swisstronik") {
    const contract = await hre.ethers.deployContract("SimpleStorage", ["First Data"]);
    await contract.waitForDeployment();
    console.log(`SimpleStorage contract in ${networkName} deployed to ${contract.target}`);
    return contract; 
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
