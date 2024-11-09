// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract MerkleProofVerifier {
    bytes32 public merkleRoot;

    function setMerkleRoot(bytes32 _root) external {
        merkleRoot = _root;
    }

    function verifyTransaction(
        bytes32[] memory proof,
        bytes32 leaf
    ) public view returns (bool) {
        return MerkleProof.verify(proof, merkleRoot, leaf);
    }
}
