import { ethers } from "hardhat";
import NFTURIs from "../data";

async function main() {
  let NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
  let NftMarketplace = await NFTMarketplace.deploy("EthForAll", "EFM");

  NftMarketplace = await NftMarketplace.deployed();

  console.log(`NFTMarketplace  ${NftMarketplace.address}`);

  console.log(NFTURIs)
  
  



}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
