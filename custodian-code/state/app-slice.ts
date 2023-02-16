import { createSlice } from '@reduxjs/toolkit'
import { IPaymentType, IStore } from "@/types";


const initialState: IStore = {
    allNfts: [],
    payWith: IPaymentType.CRYPTO
}

const Slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
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

export const { setAllNfts, setPayWith } = Slice.actions
export default Slice.reducer;
