//https://eth-goerli.g.alchemy.com/v2/bcGOdgNfml25ePBUXuSVl7NXrQ8e5JNC

require("@nomiclabs/hardhat-waffle");

require("@nomiclabs/hardhat-ethers");
const API_URL =
  "https://eth-goerli.g.alchemy.com/v2/bcGOdgNfml25ePBUXuSVl7NXrQ8e5JNC";
const PRIVATE_KEY =
  "15c399e216c66e0d26c1b13724eeece4ece25f098b4be3bd38ee81e5a5e85190";
const PUBLIC_KEY = "0x6618b3AE18dEdf0cD6176E18314dF6f9BB2Cc78D";

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
