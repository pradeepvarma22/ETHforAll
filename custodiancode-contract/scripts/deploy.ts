import { ethers } from "hardhat";
import NFTURIs from "../data";


async function main() {
  let NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
  let NftMarketplace = await NFTMarketplace.deploy("EthForAll", "EFM");
  NftMarketplace = await NftMarketplace.deployed();

  // require(createNFTByUser)
  for (let i = 0; i < 10; i++) {
    await (await NftMarketplace.createNFTByUser(NFTURIs[i], 1)).wait()
  }

  // require(createNFTByAdmin)
  for (let i = 10; i < NFTURIs.length; i++) {
    await (await NftMarketplace.createNFTByAdmin(NFTURIs[i], `socialId_${i}`, 2)).wait()
  }

  await (await NftMarketplace.createNFTByAdminWithWallet(NFTURIs[0], "0xf088B67e92b46E0637E67b8a64A95cC709cD2f98", 2)).wait()

  await (await NftMarketplace.executeSale(1, { value: 1 })).wait()
  await (await NftMarketplace.executeSale(2, { value: 1 })).wait()
  await (await NftMarketplace.executeSale(3, { value: 1 })).wait()
  await (await NftMarketplace.executeSaleByAdmin(10, "x12a3544")).wait()
  await (await NftMarketplace.executeSaleByAdmin(11, "x12a3544")).wait()
  await (await NftMarketplace.executeSaleByAdmin(12, "x12a3544")).wait()
  console.log(`NFTMarketplace  ${NftMarketplace.address}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
