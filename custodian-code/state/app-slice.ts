import { createSlice } from '@reduxjs/toolkit'
import { IPaymentType, IStore } from "@/types";


const initialState: IStore = {
    allNfts: [],
    payWith: IPaymentType.CRYPTO,
    hasConnectedWallet: false,
    userHasWallet: false,
    walletAddress: "",
    auctionNfts: [],
    auctionNftItem: { auctionId: 0, currentlyListed: false, description: "", discountRate: 0, expiresAt: 0, hasTxnDone: false, image: "", isFiat: false, name: "", nftId: 0, owner: "", price: 0, seller: "", socialId: "", startAt: 0, startingPrice: 0, tokenId: 0, txnId: "" }
}

const Slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        setUserHasWallet: (state, action) => {
            state.userHasWallet = action.payload
        },
        setWallet: (state, action) => {

            if (action.payload) {
                state.walletAddress = action.payload
                state.hasConnectedWallet = true
            } else {
                state.walletAddress = ""
                state.hasConnectedWallet = false
            }

        },
        setAllNfts: (state, action) => {
            if (action.payload) {
                state.allNfts = action.payload
            }
            else {
                state.allNfts = []
            }
        },
        setPayWith: (state, action) => {
            if (action.payload === IPaymentType.CRYPTO) {
                state.payWith = IPaymentType.CRYPTO
            }
            else {
                state.payWith = IPaymentType.CREDIT_CARD
            }
        },
        setAuctionNfts: (state, action) => {
            if (action.payload) {
                state.auctionNfts = action.payload
            }
            else {
                state.auctionNfts = []
            }
        },
        setAuctionNftItem: (state, action) => {
            if (action.payload) {
                state.auctionNftItem = action.payload
            }
        }

    }
})

export const { setAllNfts, setPayWith, setUserHasWallet, setWallet, setAuctionNfts,setAuctionNftItem } = Slice.actions
export default Slice.reducer;
