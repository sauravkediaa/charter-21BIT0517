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
```bash
D:\CharterLabs
├── contracts/
│ └── MerkleProofVerifier.sol
├── scripts/
│ └── deploy.js
├── test/
│ └── MerkleProofVerifier.js
├── fetchTransactions.js
├── generateMerkleTree.js
├── .env
├── .gitignore
├── hardhat.config.js
├── package.json
└── README.md
```
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

## **Environment Variables**

```bash
ALCHEMY_API_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY
PRIVATE_KEY=your_private_key_here
```

- ALCHEMY_API_URL: Your Alchemy API URL for the Sepolia testnet.
- PRIVATE_KEY: Your Ethereum wallet's private key (keep this secure and never share it).

## **Usage**

### **1. Fetch Transactions**

Use the `fetchTransactions.js` script to fetch transactions from a specified block on the Sepolia network:

```bash
node fetchTransactions.js
```

### **2. Generate Merkle Tree**

Use the generateMerkleTree.js script to generate a Merkle tree from the fetched transactions:

```bash
node generateMerkleTree.js
```

### **3. Deploy the Contract**

Compile and deploy the smart contract to the Sepolia testnet:

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```

The deployment script will print the contract address upon successful deployment.

### **4. Test the Contract**

Run the tests to verify the functionality of the smart contract:

```bash
npx hardhat test
```

## **Project Details**

### **Merkle Tree Construction**

- The transactions fetched from a specified block are used to construct a Merkle Tree.
- The root of the Merkle Tree is stored on-chain in the smart contract.

### **Smart Contract Functionality**

The Solidity contract `MerkleProofVerifier.sol` includes:

- **setMerkleRoot**: Allows the contract owner to set the Merkle root.
- **verifyTransaction**: Verifies if a transaction is included in the block using a Merkle proof.

### **Testing**

The test script (`test/MerkleProofVerifier.js`) covers:

- Setting the Merkle root.
- Verifying a transaction using a valid proof.

---

## **Technologies Used**

- **Solidity**: Smart contract language.
- **Hardhat**: Development environment for Ethereum.
- **ethers.js**: Library for interacting with the Ethereum blockchain.
- **MerkleTreeJS**: Library for constructing and managing Merkle Trees.
- **Alchemy**: Ethereum API provider.
- **dotenv**: Environment variable management.
