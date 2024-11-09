import { ethers } from "hardhat";
import { expect } from "chai";

describe("MerkleProofVerifier", function () {
  it("should verify a transaction with a valid Merkle proof", async function () {
    const MerkleProofVerifier = await ethers.getContractFactory("MerkleProofVerifier");
    const contract = await MerkleProofVerifier.deploy();
    await contract.deployed();

    const merkleRoot = "0x..."; // Replace with actual Merkle Root
    await contract.setMerkleRoot(merkleRoot);

    const proof = ["0x...", "0x..."]; // Replace with actual proof
    const leaf = "0x..."; // Replace with actual transaction hash

    const result = await contract.verifyTransaction(proof, leaf);
    expect(result).to.be.true;
  });
});
