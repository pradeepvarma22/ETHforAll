import { createSlice } from '@reduxjs/toolkit'
import { IPaymentType, IStore } from "@/types";


const initialState: IStore = {
    allNfts: [],
    payWith: IPaymentType.CRYPTO,
    hasConnectedWallet: false,
    userHasWallet: false,
    walletAddress: ""
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
        }

    }
})

export const { setAllNfts, setPayWith, setUserHasWallet, setWallet } = Slice.actions
export default Slice.reducer;
