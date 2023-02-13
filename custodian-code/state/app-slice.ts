import { createSlice } from '@reduxjs/toolkit'
import { IStore } from "@/types";


const initialState: IStore = {
    allNfts: []
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

    }
})

export const { setAllNfts } = Slice.actions
export default Slice.reducer;
