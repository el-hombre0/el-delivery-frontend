// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import getToken from "../../services/getToken";
// import instance from "../../services/axios_helper";

// export const fetchOneOrder = createAsyncThunk(
//   "oneOrder/fetchOneOrder",
//   async (orderId: string | undefined) => {
//     const token = getToken();
//     const { data } = await instance.get("/orders/" + orderId, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log("orderId in fetch", orderId);
//     return data;
//   }
// );

// const initialState = {
//   oneOrder: {
//     items: [],
//     status: "loading",
//   },
// };

// const oneOrderSlice = createSlice({
//   name: "oneOrder",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchOneOrder.pending, (state) => {
//         state.oneOrder.status = "loading";
//         state.oneOrder.items = [];
//       })
//       .addCase(fetchOneOrder.fulfilled, (state, action) => {
//         state.oneOrder.status = "loaded";
//         state.oneOrder.items = action.payload;
//       })
//       .addCase(fetchOneOrder.rejected, (state) => {
//         state.oneOrder.status = "error";
//         state.oneOrder.items = [];
//       });
//   },
// });
// export const oneOrderReducer = oneOrderSlice.reducer;
