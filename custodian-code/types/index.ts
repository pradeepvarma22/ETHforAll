import mongoose from "mongoose";


export interface IUser {
    _id: mongoose.Types.ObjectId;
    name: string;
    email?: string | undefined;
    image: string;
    emailVerified: boolean;
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

export enum IPaymentType {
    'CRYPTO' = 'CRYPTO',
    'CREDIT_CARD' = 'CREDIT_CARD'
}

export interface IStore {
    allNfts: INFTItemEx[];
    payWith: IPaymentType;
}
