import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("NFTMarketPlace", function () {

  async function deployNFTMarketFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const NftMarketPlace = await ethers.getContractFactory("NFTMarketplace");
    const NftMarket = await NftMarketPlace.deploy("EthForAll", "EFM");

    return { NftMarket, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the NAME SYMBOL", async function () {
      const { NftMarket, owner, otherAccount } = await loadFixture(deployNFTMarketFixture);

      expect(await NftMarket.name()).to.equal("EthForAll");
      expect(await NftMarket.symbol()).to.equal("EFM");
    });


  });



});
