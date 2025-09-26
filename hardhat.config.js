require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    plasmaTestnet: {
      url: "https://rpc.plasma-testnet.io", // replace with actual Plasma RPC endpoint
      accounts: ["YOUR_PRIVATE_KEY_HERE"]
    }
  },
  etherscan: {
    apiKey: "YOUR_ETHERSCAN_API_KEY"
  }
};