//https://eth-goerli.g.alchemy.com/v2/bcGOdgNfml25ePBUXuSVl7NXrQ8e5JNC

require("@nomiclabs/hardhat-waffle");

require("@nomiclabs/hardhat-ethers");
const API_URL =
  "https://eth-goerli.g.alchemy.com/v2/bcGOdgNfml25ePBUXuSVl7NXrQ8e5JNC";
const PRIVATE_KEY = "YOUR PIVATE KEY HERE";
const PUBLIC_KEY = "YOUR PUBLIC KEY HERE";

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
