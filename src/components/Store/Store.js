import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./OrderSlice"

const Store = configureStore({
    reducer: {
        order: orderReducer,
    }
});
export default Store
