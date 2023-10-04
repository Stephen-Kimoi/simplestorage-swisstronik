// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    // Private state variable to store a string
    string private data; 

    // Constructor to set the initial value of the state variable
    constructor(string memory initialData) {
        data = initialData;
    }

    // Function to set a new value for the state variable
    function setData(string memory newData) public {
        data = newData;
    }

    // Function to retrieve the current value of the state variable
    function getData() public view returns (string memory) {
        return data;
    }
}
