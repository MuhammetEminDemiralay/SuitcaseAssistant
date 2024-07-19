import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import travelSlice from "./travelSlice";

 const store = configureStore({
    reducer : {
        travelSlice : travelSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export default store