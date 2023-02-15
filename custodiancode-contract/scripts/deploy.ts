import { ethers } from "hardhat";
import NFTURIs from "../data";


async function main() {
  let NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
  let NftMarketplace = await NFTMarketplace.deploy("EthForAll", "EFM");
  NftMarketplace = await NftMarketplace.deployed();

  // require(createNFTByUser)
  for (let i = 0; i < 10; i++) {
    await NftMarketplace.createNFTByUser(NFTURIs[i], 1);
  }

  // require(createNFTByAdmin)
  for (let i = 10; i < NFTURIs.length; i++) {
    await NftMarketplace.createNFTByAdmin(NFTURIs[i], `socialId_${i}`, 2);
  }

  await NftMarketplace.executeSale(1, { value: 1 })
  await NftMarketplace.executeSale(2, { value: 1 })
  await NftMarketplace.executeSale(3, { value: 1 })
  await NftMarketplace.executeSaleByAdmin(10, "x12a3544")
  await NftMarketplace.executeSaleByAdmin(11, "x12a3544")
  await NftMarketplace.executeSaleByAdmin(12, "x12a3544")
  console.log(`NFTMarketplace  ${NftMarketplace.address}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
