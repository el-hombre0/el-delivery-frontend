import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { ordersReducer } from "./slices/order";
import { oneOrderReducer } from "./slices/oneOrder";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    orders: ordersReducer,
    oneOrder: oneOrderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
