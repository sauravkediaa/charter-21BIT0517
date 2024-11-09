import 'dotenv/config'; // Ensure this is at the very top of your file
import { JsonRpcProvider } from "ethers";
import { MerkleTree } from "merkletreejs";
import crypto from "crypto-js";

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL;
const provider = new JsonRpcProvider(ALCHEMY_API_URL);

function hashData(data) {
    return crypto.SHA256(data).toString();
}

async function buildMerkleTree(blockNumber) {
    try {
        const block = await provider.getBlock(blockNumber);
        if (!block) {
            console.log("No block found");
            return;
        }
        const transactionHashes = block.transactions;
        const leaves = transactionHashes.map(hashData);
        const tree = new MerkleTree(leaves, hashData);
        const merkleRoot = tree.getRoot().toString('hex');
        console.log("Merkle Root:", merkleRoot);
        const proof = tree.getProof(leaves[0]).map(x => x.data.toString('hex'));
        console.log("Merkle Proof:", proof);
    } catch (error) {
        console.error("Error fetching block:", error);
    }
}

buildMerkleTree(3456789);
