// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NexToken is ERC20, Ownable {
    constructor() ERC20("Nexbizn", "NEX") Ownable(msg.sender) {}

    // Mint tokens
    function buyToken(address to, uint amount) external {
        require (amount > 0, "You need to mint at least 1 token");
        _mint(to, amount);
    }

    // Sell tokens
    function sellToken(address to, uint amount) external {
        require (amount > 0, "You need to sell at least 1 token");
        require(balanceOf(to) >= amount, "Not enough tokens to sell");
        _burn(to, amount);
    }
}