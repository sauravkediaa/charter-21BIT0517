import { JsonRpcProvider } from "ethers";
import { MerkleTree } from "merkletreejs";
import crypto from "crypto-js";
require("dotenv").config();

const ALCHEMY_API_URL = "process.env.ALCHEMY_API_URL";
const provider = new JsonRpcProvider(ALCHEMY_API_URL);

function hashData(data) {
    return crypto.SHA256(data).toString();
}

async function buildMerkleTree(blockNumber) {
    const block = await provider.getBlock(blockNumber);
    const transactionHashes = block.transactions;

    const leaves = transactionHashes.map(hashData);
    const tree = new MerkleTree(leaves, hashData);

    const merkleRoot = tree.getRoot().toString('hex');
    console.log("Merkle Root:", merkleRoot);

    const proof = tree.getProof(leaves[0]).map(x => x.data.toString('hex'));
    console.log("Merkle Proof for first transaction:", proof);

    return { tree, merkleRoot, proof, transactionHash: transactionHashes[0] };
}

buildMerkleTree(3456789);
