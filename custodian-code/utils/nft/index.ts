
import { INFTItem, INFTItemEx } from "@/types";
import axios from 'axios';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/constants";
import { ethers } from "ethers"


export async function getAllNfts() {

    const URI: string = process.env.NEXT_PUBLIC_MANTLE_URI_QUICKNODE!
    const jsonRPCProvider = new ethers.JsonRpcProvider(URI);
    const nftContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, jsonRPCProvider)
    const allNfts: INFTItem[] = await nftContract.getAllNFTs()
    const items: INFTItemEx[] = await Promise.all(allNfts.map(async ({ tokenId, owner, seller, price, currentlyListed, isFiat, socialId, hasTxnDone, txnId }) => {

        const tokenURI = await nftContract.tokenURI(tokenId);
        const { data: { image, name, description } } = await axios.get(tokenURI);

        const _price = ethers.formatUnits(price.toString(), 'wei');
        const _tokenId = ethers.formatUnits(tokenId.toString(), 'wei');
        return { tokenId: Number(_tokenId), currentlyListed, isFiat, socialId, hasTxnDone, txnId, price: Number(_price), seller, owner, image, name, description };
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

    const finalItem: INFTItemEx = { tokenId, currentlyListed, isFiat, socialId, hasTxnDone, txnId, price, seller, owner, image, name, description }


    return finalItem;
}