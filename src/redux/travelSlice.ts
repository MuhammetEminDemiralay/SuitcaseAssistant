import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";



const travelSlice = createSlice({
    name: 'travel',
    initialState: {
        suitcaseInfo: {}
    },
    reducers: {
        setSuitcaseInfo: (state, action) => {
            
        }
    }
})

export default travelSlice.reducer
export const { setSuitcaseInfo } = travelSlice.actions