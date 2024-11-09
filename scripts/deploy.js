import { ethers } from "hardhat";

async function main() {
    const MerkleProofVerifier = await ethers.getContractFactory("MerkleProofVerifier");
    const contract = await MerkleProofVerifier.deploy();
    await contract.deployed();

    console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
