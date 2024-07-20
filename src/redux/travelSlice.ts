import { createSlice } from "@reduxjs/toolkit";



const travelSlice = createSlice({
    name: 'travel',
    initialState: {
        suitcaseInfo: {}
    },
    reducers: {
        setSuitcaseInfo: (state, action) => {
            state.suitcaseInfo = action.payload;
        }
    }
})

export default travelSlice.reducer
export const { setSuitcaseInfo } = travelSlice.actions