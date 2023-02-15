import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"

const PRIVATE_KEY = process.env.PRIVATE_KEY!

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    mantle: {
      chainId: 5001,
      accounts: [PRIVATE_KEY],
      url: "https://rpc.testnet.mantle.xyz"
    },
    hyperspace: {
      chainId: 3141,
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      chainId: 80001,
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [PRIVATE_KEY],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./temp/cache",
    artifacts: "./temp/artifacts",
  },
  typechain: {
    outDir: "./temp/types"
  }
};

export default config;
