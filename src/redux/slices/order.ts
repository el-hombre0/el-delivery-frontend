import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../services/axios_helper";
import getToken from "../../services/getToken";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  // const cookies = new Cookies();
  // const token = cookies.get("token");
  const token = getToken();
  const { data } = await instance.get("/orders", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
});
// export const fetchOneOrder = createAsyncThunk(
//   "orders/fetchOneOrder",
//   async (id: string) => {
//     const token = getToken();
//     const { data } = await instance.get("/orders/" + id, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return data;
//   }
// );
// export const fetchNewOrder = createAsyncThunk(
//   "orders/fetchNewOrder",
//   async (params: any) => {
//     const { data } = await instance.post("/orders", params);
//     return data;
//   }
// );

const initialState = {
  orders: {
    items: [],
    status: "loading",
  },
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.orders.status = "loading";
        state.orders.items = [];
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders.status = "loaded";
        state.orders.items = action.payload;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.orders.status = "error";
        state.orders.items = [];
      });
  },
});

export const ordersReducer = ordersSlice.reducer;
