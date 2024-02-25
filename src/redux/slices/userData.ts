import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../services/axios_helper";
import getToken from "../../services/getToken";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async () => {
    const token = getToken();
    const { data } = await instance.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  }
);

const initialState = {
  userData: {
    items: [],
    status: "loading",
  },
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.userData.status = "loading";
        state.userData.items = [];
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.userData.status = "loaded";
        state.userData.items = action.payload;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.userData.status = "error";
        state.userData.items = [];
      });
  },
});
export const userDataReducer = userDataSlice.reducer;
