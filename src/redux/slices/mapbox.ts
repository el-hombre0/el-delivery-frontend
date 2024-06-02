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

// Получение расстояния от базы до пользователя
export const fetchDistanceToUser = createAsyncThunk(
  "mapbox/fetchDistanceToUser",
  async (params: any) => {
    console.log("params:", params);
    const { data } = await axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${params.longitude},${params.latitude};${params.baseCoords.longitude},${params.baseCoords.latitude}/`,
      // `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/`,
      params
    );
    console.log("data.routes[0].distance: ", data.routes[0].distance);
    return data.routes[0].distance;
  }
);

const initialState = {
  userAddress: { data: null, status: "loading" },
  distanceToUser: { data: null, status: "loading" },
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
const distanceToUserSlice = createSlice({
  name: "distanceToUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDistanceToUser.pending, (state) => {
        state.distanceToUser.status = "loading";
        state.distanceToUser.data = null;
      })
      .addCase(fetchDistanceToUser.fulfilled, (state, action) => {
        state.distanceToUser.status = "loaded";
        state.distanceToUser.data = action.payload;
      })
      .addCase(fetchDistanceToUser.rejected, (state) => {
        state.distanceToUser.status = "error";
        state.distanceToUser.data = null;
      });
  },
});
export const userAddressReducer = userAddressSlice.reducer;
export const distanceToUserReducer = distanceToUserSlice.reducer;
