const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMarketplace", function () {

    async function deployMarketplaceFixture() {
        const [deployer, account_1, account_2, account_3] = await ethers.getSigners()
        const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace")
        const nftmarketplace = await NFTMarketplace.deploy("MyNFT", "NFT")
        await nftmarketplace.deployed()

        return [nftmarketplace, deployer, account_1, account_2, account_3]
    }

    describe("Deployment", function () {

        it("init", async function () {

            const [nftmarketplace, deployer, account_1, account_2, account_3] = await deployMarketplaceFixture()

            expect(await nftmarketplace.name()).to.equal("MyNFT")
        })
    })

    describe("NFT", function () {

        it("init", async function () {
            const [nftmarketplace, deployer, account_1, account_2, account_3] = await deployMarketplaceFixture()
            expect(await nftmarketplace.name()).to.equal("MyNFT")
        })

        it("createNFTByUser", async function () {
            const [nftmarketplace, deployer, account_1, account_2, account_3] = await deployMarketplaceFixture()
            let txn = await nftmarketplace.connect(account_1).createNFTByUser("URI_1", 101)
            txn = await txn.wait();
        })

    })

});
