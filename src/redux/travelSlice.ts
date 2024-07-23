import { createSlice } from "@reduxjs/toolkit";


type Model = {
    allTravelData: any[]
}

const initialState: Model = {
    allTravelData: []
}

const travelSlice = createSlice({
    name: 'travel',
    initialState,
    reducers: {
        getAllTravelData: (state, action) => {
            state.allTravelData = [...state.allTravelData, action.payload]
        }
    }
})

export default travelSlice.reducer
export const { getAllTravelData } = travelSlice.actions