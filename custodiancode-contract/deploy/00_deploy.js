require("hardhat-deploy")
require("hardhat-deploy-ethers")

const { networkConfig } = require("../helper-hardhat-config")

const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    console.log("Wallet Ethereum Address:", wallet.address)
    // const chainId = network.config.chainId

    let contract = await ethers.getContractFactory("MyContract", wallet)
    console.log("Deploying contract...")
    contract = await contract.deploy() //    contract = await contract.deploy(param1, parm2);
    await contract.deployed()
    console.log("SimpleCoin deployed to:", contract.address)
}
