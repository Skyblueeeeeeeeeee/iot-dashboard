import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./services/auth.slice";
import deviceSlice from "./services/device.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    device: deviceSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
