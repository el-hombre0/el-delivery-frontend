import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { myOrdersReducer, ordersReducer } from "./slices/order";
import { oneOrderReducer } from "./slices/oneOrder";
import { userDataReducer } from "./slices/userData";
import { distanceToUserReducer, userAddressReducer } from "./slices/mapbox";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    orders: ordersReducer,
    oneOrder: oneOrderReducer,
    userData: userDataReducer,
    myOrders: myOrdersReducer,
    userAddress: userAddressReducer,
    distanceToUser: distanceToUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
