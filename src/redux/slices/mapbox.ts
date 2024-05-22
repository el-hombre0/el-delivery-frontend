import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

const initialState = {
  userAddress: { data: null, status: "loading" },
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
export const userAddressReducer = userAddressSlice.reducer;
