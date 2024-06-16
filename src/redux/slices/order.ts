import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../services/axios_helper";
import getToken from "../../services/getToken";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const token = getToken();
  const { data } = await instance.get("/orders", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
});

export const fetchMyOrders = createAsyncThunk(
  "orders/fetchMyOrders",
  async (userId) => {
    const token = getToken();
    const { data } = await instance.get("/orders/user/" + userId, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  }
);

export const fetchOneOrder = createAsyncThunk(
  "oneOrder/fetchOneOrder",
  async (orderId: string | undefined) => {
    const token = getToken();
    const { data } = await instance.get("/orders/" + orderId, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("orderId in fetch", orderId);
    return data;
  }
);

const initialState = {
  orders: {
    items: [],
    status: "loading",
  },
  oneOrder: {
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
      })
      .addCase(fetchMyOrders.pending, (state) => {
        state.orders.status = "loading";
        state.orders.items = [];
      })
      .addCase(fetchMyOrders.fulfilled, (state, action) => {
        state.orders.status = "loaded";
        state.orders.items = action.payload;
      })
      .addCase(fetchMyOrders.rejected, (state) => {
        state.orders.status = "error";
        state.orders.items = [];
      })
      .addCase(fetchOneOrder.pending, (state) => {
        state.oneOrder.status = "loading";
        state.oneOrder.items = [];
      })
      .addCase(fetchOneOrder.fulfilled, (state, action) => {
        state.oneOrder.status = "loaded";
        state.oneOrder.items = action.payload;
      })
      .addCase(fetchOneOrder.rejected, (state) => {
        state.oneOrder.status = "error";
        state.oneOrder.items = [];
      });
  },
});

export const ordersReducer = ordersSlice.reducer;

