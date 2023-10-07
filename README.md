
# SimpleStorage Smart Contract Functionality

## Overview

The `SimpleStorage` smart contract is designed to perform the following basic functions:

1. **Storing Data**: It allows users to store a single string value on the Ethereum blockchain.

2. **Updating Data**: Users can update the stored string value with a new one.

3. **Retrieving Data**: It provides the ability to retrieve the currently stored string value.

## Contract Details

- **Solidity Version**: ^0.8.0
- **License**: MIT

## Functions

### `setData(string newData)`

- **Description**: This function enables users to update the stored string value. The new string replaces the existing one.

#### Parameters

- `newData` (string): The new string value to be stored.

### `getData()`

- **Description**: This read-only function allows users to retrieve the current string value stored in the contract.

#### Returns

- `string`: The current string value stored in the contract.

## Example Usage

1. **Setting a New Value**: Use the `setData` function to update the stored string value:

   ```solidity
   simpleStorage.setData("New Value");
   ```

2. **Retrieving the Current Value**: Retrieve the current string value using the `getData` function:

   ```solidity
   string currentValue = simpleStorage.getData();
   ```

   After executing this line, `currentValue` will contain the current value stored in the contract.

## Note

- This smart contract serves as a basic example of how to store and retrieve data on the Ethereum blockchain. It does not implement advanced access control or security features and is intended for educational purposes.

Certainly, here's a documentation for the provided script that explains its functionality:

# getStorageValue.js Script Description

## Overview

The Ethereum Storage Retrieval Script is a Node.js script that retrieves storage variables from Ethereum smart contracts on specified Ethereum networks. It uses the `eth_getStorageAt` RPC method to access storage slots in smart contracts and extract data from them.

## Script Details

- **Script Name**: Ethereum Storage Retrieval Script
- **Dependencies**: ethers.js, hardhat, @swisstronik/swisstronik.js, dotenv
- **Configuration**: Requires a `deployedContracts.json` file and a `.env` file for environment variables.

## Script Functionality

The script performs the following tasks:

1. **Load Contract Information**: It loads contract information from a JSON file named `deployedContracts.json`. This file should contain details about the contracts to be queried, including their addresses.

2. **Network Configurations**: It defines network configurations for Ethereum networks to be queried. The script supports the Polygon Mumbai network and a custom network named "swisstronik" with a specified provider URL.

3. **Storage Value Retrieval**: The script iterates through the contracts specified in the loaded contract information. For each contract, it retrieves the storage value using the `eth_getStorageAt` RPC method. The script retrieves the value stored in slot `0x0`, which corresponds to the first storage slot of the contract.

4. **Logging**: It logs the retrieved storage values, indicating from which network they were retrieved.

5. **Error Handling**: The script includes error handling to gracefully handle any unexpected issues during execution.

## Usage

1. **Prerequisites**: Before running the script, ensure you have the following prerequisites in place:
   - The `deployedContracts.json` file containing contract information.
   - The `.env` file containing environment variables, especially the Alchemy API key if querying the Polygon Mumbai network.

2. **Installation**: Make sure you have the required dependencies installed by running:
   ```bash
   npm install ethers hardhat @swisstronik/swisstronik.js dotenv
   ```

3. **Execution**: Run the script using Node.js as follows:
   ```bash
   node script.js
   ```
   Replace `script.js` with the name of your script file.

4. **Results**: The script will retrieve and display the storage values from the specified Ethereum networks.

## Important Notes

- This script demonstrates how to use ethers.js and the `eth_getStorageAt` method to interact with Ethereum smart contracts and retrieve storage values.
- Ensure that you have the correct contract information in the `deployedContracts.json` file.
- Protect sensitive information, such as API keys and private keys, by storing them securely and using environment variables.
- Customize the network configurations and error handling as needed for your specific use case.
