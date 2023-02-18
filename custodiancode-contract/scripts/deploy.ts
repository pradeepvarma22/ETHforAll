import { ethers } from "hardhat";
import NFTURIs from "../data";

function getRandomArbitrary(min:number, max:number):number {
  return Math.round(Math.random() * (max - min) + min);
}


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

  let NFTAuction = await ethers.getContractFactory("NFTAuction");
  let nftAuction = await NFTAuction.deploy(NftMarketplace.address);
  nftAuction = await nftAuction.deployed();


  for (let i = 0; i < AuctionURIs.length; i++) {
    await (await nftAuction.sellNFT(AuctionURIs[i], getRandomArbitrary(1,5), getRandomArbitrary(10,20), getRandomArbitrary(1,10) )).wait()
  }

  console.log(`NFTMarketplace  ${NftMarketplace.address}`);
  console.log(`NFTAuction  ${nftAuction.address}`);

  



}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


const AuctionURIs: string[] = [
  "https://ipfs.io/ipfs/bafybeihj7svxtobbgtb7gqx6zinqbscpdatp33cxnxsvzzklkpptgu3ud4/auction_1.json",
  "https://ipfs.io/ipfs/bafybeihoyd6bgasuh4q4bl7qiuq7ncsyrukrevtqtxmlfikaekklrfw2mi/auction_2.json",
  "https://ipfs.io/ipfs/bafybeie54op256youhqnqjfjhu4g3jpfoi4asbvz5sa3ctaeij7cecblty/auction_3.json",
  "https://ipfs.io/ipfs/bafybeicrbg2xplzrfl6y4ntuurjrfhtrhvoi3hayvoul6cmbx5cenj6etq/auction_4.json",
  "https://ipfs.io/ipfs/bafybeiexss7xu4wgpbnfyiant57xn6izfib6klcaygx2xejqxry65fb7iy/auction_5.json",
  "https://ipfs.io/ipfs/bafybeifoyuxol6qkdzat6hf6jjedbjvutfxlhjbcg3qr52pjr72ayxywbe/auction_6.json",
  "https://ipfs.io/ipfs/bafybeic7fuc7udu6drjfdmsdvu7ccoi45i2ljqpoship76y3hyt4sna3ki/7.json",
  "https://ipfs.io/ipfs/bafybeigfi23m2joaxxsnaayfp4e75z4nv3652n22lvtfxeffjjkv5g2leu/8.json",
  "https://ipfs.io/ipfs/bafybeid2i4suy4yjndcobfwx7vbi4nwzmi7uryrv3y72fk4nyrrgzbneze/9.json"
]
