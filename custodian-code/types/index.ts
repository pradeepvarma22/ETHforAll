import mongoose from "mongoose";


export interface IUser {
    _id: mongoose.Types.ObjectId;
    name: string;
    email?: string | undefined;
    image: string;
    emailVerified: boolean;
    wallet_address: string;
}

export interface IWallet {
    _id: mongoose.Types.ObjectId;
    public_key: string;
    private_key: string;
    wallet_mnemonic_phrase: string;
    userObjectId: string;
}

export interface IWalletState {
    wallet_address: string;
    wallet_privateKey: string;
    wallet_mnemonic_phrase: string;
}

export interface INFTItem {
    tokenId: number;
    owner: string;
    seller: string;
    price: number;
    currentlyListed: boolean;
    isFiat: boolean;
    socialId: string;
    hasTxnDone: boolean;
    txnId: string;
}


export interface INFTItemEx extends INFTItem {
    image: string;
    name: string;
    description: string;
}

export interface IAuction2 extends INFTItemEx, IAuctionEx {


}


export enum IPaymentType {
    'CRYPTO' = 'CRYPTO',
    'CREDIT_CARD' = 'CREDIT_CARD'
}

export interface IStore {
    allNfts: INFTItemEx[];
    payWith: IPaymentType;
    hasConnectedWallet: boolean;
    walletAddress: string;
    userHasWallet: boolean;
    auctionNfts: IAuctionEx[];
    auctionNftItem: IAuction2;
    userNfts:INFTItemEx[];
}

export enum IClickStatus {
    'CLICK_FALSE' = 'CLICK_FALSE',
    'CLICK_TRUE' = 'CLICK_TRUE',
    'WORK_DONE' = 'WORK_DONE'
}


export interface IAuction {
    startingPrice: number,
    startAt: number;
    expiresAt: number;
    nftId: number;
    discountRate: number;
}

export interface IAuction {
    startingPrice: number,
    startAt: number;
    expiresAt: number;
    nftId: number;
    discountRate: number;
}

export interface IAuctionEx extends IAuction {
    image: string;
    name: string;
    description: string;
    auctionId: number;
}