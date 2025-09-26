// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title Payment Gateway Token (PGT)
/// @notice Utility + Governance token for Plasma-based Payment Gateway
contract PGT is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("Payment Gateway Token", "PGT") {
        _mint(msg.sender, initialSupply);
    }

    /// @notice Mint new tokens (if needed for rewards)
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    /// @notice Burn tokens (optional utility for fee burns)
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}
