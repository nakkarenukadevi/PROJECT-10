import { createSlice } from "@reduxjs/toolkit"

const orderSlice = createSlice({
    name: "order",
    initialState: {
        data: []
    },
    reducers: {
        orderData: (state, action) => {
            state.data = action.payload;
        }

    }
})
export const { orderData } = orderSlice.actions
export default orderSlice.reducer;