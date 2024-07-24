import { createSlice } from "@reduxjs/toolkit";


type Model = {
    allTravelData: any[],
    updateState: boolean
}

const initialState: Model = {
    allTravelData: [],
    updateState: false
}

const travelSlice = createSlice({
    name: 'travel',
    initialState,
    reducers: {
        setAllTravelData: (state, action) => {
            state.allTravelData = [...state.allTravelData, action.payload]
        },
        setState: (state) => {
            state.updateState = true;
        }
    }
})

export default travelSlice.reducer
export const { setAllTravelData, setState } = travelSlice.actions