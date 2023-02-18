
import { INFTItem, INFTItemEx, IAuction, IAuctionEx } from "@/types";
import axios from 'axios';
import { CONTRACT_ADDRESS, CONTRACT_ABI, AUCTION_CONTRACT_ADDRESS, AUCTION_CONTRACT_ABI } from "@/constants";
import { ethers } from "ethers"


export async function getAllNfts() {

    const URI: string = process.env.NEXT_PUBLIC_MANTLE_URI_QUICKNODE!
    const jsonRPCProvider = new ethers.JsonRpcProvider(URI);
    const nftContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, jsonRPCProvider)
    const allNfts: INFTItem[] = await nftContract.getAllNFTs()
    const items: INFTItemEx[] = await Promise.all(allNfts.map(async ({ tokenId, owner, seller, price, currentlyListed, isFiat, socialId, hasTxnDone, txnId }) => {

        const tokenURI = await nftContract.tokenURI(tokenId);
        const { data: { image, name, description } } = await axios.get(tokenURI);
        let _image = String(image)
        _image = _image.replace("ipfs://", "https://ipfs.io/ipfs/")

        const _price = ethers.formatUnits(price.toString(), 'wei');
        const _tokenId = ethers.formatUnits(tokenId.toString(), 'wei');
        return { tokenId: Number(_tokenId), currentlyListed, isFiat, socialId, hasTxnDone, txnId, price: Number(_price), seller, owner, image: _image, name, description };
    }));
    return items;
}


export async function getNftByTokenId(tokenId: number) {

    const URI: string = process.env.NEXT_PUBLIC_MANTLE_URI_QUICKNODE!
    const jsonRPCProvider = new ethers.JsonRpcProvider(URI);
    const nftContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, jsonRPCProvider)
    const nftItem = await nftContract.getNFTItemForId(tokenId)
    const item = await Promise.all(nftItem)
    const owner = item[1]
    const seller = item[2]
    let price = Number(ethers.formatUnits(item[3].toString(), 'wei'))
    const currentlyListed = item[4]
    const isFiat = item[5]
    const socialId = item[6]
    const hasTxnDone = item[7]
    const txnId: string = item[8]
    const tokenURI = await nftContract.tokenURI(tokenId);
    const { data: { image, name, description } } = await axios.get(tokenURI);
    let _image = String(image)
    _image = _image.replace("ipfs://", "https://ipfs.io/ipfs/")

    const finalItem: INFTItemEx = { tokenId, currentlyListed, isFiat, socialId, hasTxnDone, txnId, price, seller, owner, image: _image, name, description }


    return finalItem;
}

export async function getAllAuctionNfts() {

    const URI: string = process.env.NEXT_PUBLIC_MANTLE_URI_QUICKNODE!
    const jsonRPCProvider = new ethers.JsonRpcProvider(URI);
    const auctionContract = new ethers.Contract(AUCTION_CONTRACT_ADDRESS, AUCTION_CONTRACT_ABI, jsonRPCProvider)
    const counter = await auctionContract.counter()
    const length = Number(ethers.formatUnits(counter.toString(), 'wei'))
    const nftContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, jsonRPCProvider)

    const allAuctions: IAuctionEx[] = []



    for (let i = 1; i < length; i++) {
        let un_auction = await auctionContract.auctions(i)
        const item = await Promise.all(un_auction)
        let startingPrice = Number(ethers.formatUnits(item[0].toString(), 'wei'))
        let startAt = Number(ethers.formatUnits(item[1].toString(), 'wei'))
        let expiresAt = Number(ethers.formatUnits(item[2].toString(), 'wei'))
        let nftId = Number(ethers.formatUnits(item[3].toString(), 'wei'))
        let discountRate = Number(ethers.formatUnits(item[4].toString(), 'wei'))

        const tokenURI = await nftContract.tokenURI(nftId);


        const { data: { image, name, description } } = await axios.get(tokenURI);
        let _image = String(image)
        _image = _image.replace("ipfs://", "https://ipfs.io/ipfs/")
        let auction: IAuctionEx = { startingPrice, startAt, expiresAt, nftId, discountRate, image: _image, description, name, auctionId: i }


        allAuctions.push(auction)
    }



    return allAuctions;
}

