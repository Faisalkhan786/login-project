import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './features/apiSlices/authApi';
import authReducer from './features/slices/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
