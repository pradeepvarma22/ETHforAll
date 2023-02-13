
import { INFTItem, INFTItemEx } from "@/types";
import axios from 'axios';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/constants";
import { ethers } from "ethers"


export async function getAllNfts() {

    const URI: string = process.env.NEXT_PUBLIC_MUMBAI_URI_QUICKNODE!
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

