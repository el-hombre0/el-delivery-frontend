import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Получение адреса пользователя по координатам
export const fetchUserAddress = createAsyncThunk(
  "mapbox/fetchUserAddress",
  async (params: any) => {
    const { data } = await axios.get(
      "https://api.mapbox.com/search/geocode/v6/reverse",
      params
    );
    return data.features[0].properties.full_address;
  }
);

// Получение данных маршрута от базы до пользователя
export const fetchRouteInfo = createAsyncThunk(
  "mapbox/fetchRouteInfo",
  async (params: any) => {
    const { data } = await axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${params.longitude},${params.latitude};${params.baseCoords.longitude},${params.baseCoords.latitude}/`,
      params
    );
    return data.routes[0];
  }
);

const initialState = {
  userAddress: { data: null, status: "loading" },
  routeInfo: { data: null, status: "loading" },
};

const userAddressSlice = createSlice({
  name: "userAddress",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAddress.pending, (state) => {
        state.userAddress.status = "loading";
        state.userAddress.data = null;
      })
      .addCase(fetchUserAddress.fulfilled, (state, action) => {
        state.userAddress.status = "loaded";
        state.userAddress.data = action.payload;
      })
      .addCase(fetchUserAddress.rejected, (state) => {
        state.userAddress.status = "error";
        state.userAddress.data = null;
      });
  },
});
const routeInfoSlice = createSlice({
  name: "routeInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRouteInfo.pending, (state) => {
        state.routeInfo.status = "loading";
        state.routeInfo.data = null;
      })
      .addCase(fetchRouteInfo.fulfilled, (state, action) => {
        state.routeInfo.status = "loaded";
        state.routeInfo.data = action.payload;
      })
      .addCase(fetchRouteInfo.rejected, (state) => {
        state.routeInfo.status = "error";
        state.routeInfo.data = null;
      });
  },
});
export const userAddressReducer = userAddressSlice.reducer;
export const routeInfoReducer = routeInfoSlice.reducer;
