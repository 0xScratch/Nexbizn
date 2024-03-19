const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NexBizn", (m) => {
    const nexToken = m.contract("NexToken");
    const nexNFT = m.contract("NexNFT");
    const auction = m.contract("Auction", [nexToken, nexNFT]);

    return { nexToken, nexNFT, auction };
})