import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { ordersReducer } from "./slices/order";
import { oneOrderReducer } from "./slices/oneOrder";
import { userDataReducer } from "./slices/userData";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    orders: ordersReducer,
    oneOrder: oneOrderReducer,
    userData: userDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
