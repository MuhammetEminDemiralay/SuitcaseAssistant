import { createSlice } from "@reduxjs/toolkit";


type Model = {
    allTravelData: any[],
    updateState: boolean,
    activeTabBar: string
}

const initialState: Model = {
    allTravelData: [],
    updateState: false,
    activeTabBar: 'home'
}

const travelSlice = createSlice({
    name: 'travel',
    initialState,
    reducers: {
        setAllTravelData: (state, action) => {
            state.allTravelData = [...state.allTravelData, { ...action.payload, startDate: new Date(action.payload.startDate), endDate: new Date(action.payload.endDate) }]
            state.allTravelData = state.allTravelData.sort((a, b) => a.startDate - b.startDate)
        },
        updateAllTravelData: (state, action) => {
                const updatedData = state.allTravelData.map((item) =>
                    item.key == action.payload?.key ? action.payload : item
                )
                state.allTravelData = updatedData
        },
        setState: (state) => {
            state.updateState = true;
        },
        setActiveTabBar: (state, action) => {
            state.activeTabBar = action.payload;
        }
    }
})

export default travelSlice.reducer
export const { updateAllTravelData, setAllTravelData, setState, setActiveTabBar } = travelSlice.actions