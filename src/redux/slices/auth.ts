import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/axios_helper";

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async (params: any) => {
    // Логин и пароль
    const { data } = await instance.post("/auth/authenticate", params);
    console.log(data);
    return data; // Объект с информациоей о пользователе
  }
);
export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params: any) => {
    const { data } = await instance.post("/auth/register", params);
    return data; // Объект с информациоей о пользователе
  }
);
const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = "error";
        state.data = null;
      })
      .addCase(fetchRegister.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.status = "error";
        state.data = null;
      });
  },
});

// Проверка авторизован ли пользователь
export const selectIsAuth = (state: any) => Boolean(state.auth.data);
export const selectUserData = (state: any) => state.auth.data;
export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
