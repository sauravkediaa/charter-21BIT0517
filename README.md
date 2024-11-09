# **Merkle Proof Verification on Ethereum Sepolia Testnet**

## **Project Overview**

This project implements a Merkle Proof Verification system using Solidity smart contracts on the Ethereum **Sepolia testnet**. The smart contract verifies the inclusion of transactions in a given block using Merkle proofs.

The project includes:

- A script to fetch transactions from a specified Ethereum block using Alchemy.
- A script to generate a Merkle Tree from those transactions.
- A Solidity smart contract to verify transactions using Merkle proofs.
- A Hardhat setup for deployment, testing, and interaction with the contract.

## **Table of Contents**

1. [Project Structure](#project-structure)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [Usage](#usage)
   - [Fetch Transactions](#fetch-transactions)
   - [Generate Merkle Tree](#generate-merkle-tree)
   - [Deploy the Contract](#deploy-the-contract)
   - [Test the Contract](#test-the-contract)
6. [Project Details](#project-details)
7. [Technologies Used](#technologies-used)
8. [License](#license)

---

## **Project Structure**

D:\CharterLabs├── contracts/ │ └── MerkleProofVerifier.sol ├── scripts/ │ └── deploy.js ├── test/ │ └── MerkleProofVerifier.js ├── fetchTransactions.js ├── generateMerkleTree.js ├── .env ├── .gitignore ├── hardhat.config.js ├── package.json └── README.md

## **Prerequisites**

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.x or later)
- [npm](https://www.npmjs.com/)
- [MetaMask](https://metamask.io/) (for managing your Ethereum wallet)
- [Alchemy](https://alchemy.com/) account (for interacting with the Sepolia testnet)

## **Installation**

Clone the repository and install the necessary packages:

```bash
git clone https://github.com/your-username/charter-21BIT0517.git
cd charter-21BIT0517
npm install
```
