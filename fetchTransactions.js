import { JsonRpcProvider, formatEther } from "ethers";

// Replace with your Alchemy API URL
const ALCHEMY_API_URL = "https://eth-sepolia.g.alchemy.com/v2/h0pS0PiaMZvlTNznIjd5S6XvcDeP6z0L";

// Initialize an ethers provider using Alchemy
const provider = new JsonRpcProvider(ALCHEMY_API_URL);

async function fetchTransactions(blockNumber) {
  try {
    // Fetch the block details (only transaction hashes)
    const block = await provider.getBlock(blockNumber);

    if (!block || !block.transactions.length) {
      console.log("No transactions found for this block.");
      return;
    }

    console.log(`Transactions in block #${blockNumber}:`);

    // Fetch and display full transaction details for each transaction hash
    for (const txHash of block.transactions) {
      const transaction = await provider.getTransaction(txHash);
      console.log(
        `Transaction Hash: ${transaction.hash}, From: ${transaction.from}, To: ${transaction.to}, Value: ${formatEther(
          transaction.value
        )} ETH`
      );
    }
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
}

// Replace with a block number you want to fetch transactions for
const blockNumber = 3456789; // Example block number
fetchTransactions(blockNumber);
