import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../services/axios_helper";
import Cookies from "universal-cookie";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const { data } = await instance.get("/api/orders", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
});

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
