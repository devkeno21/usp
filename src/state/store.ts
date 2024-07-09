import { configureStore } from '@reduxjs/toolkit';
import { uspApi } from './api/usp.api';
export const store = configureStore({
  reducer: {
    [uspApi.reducerPath]: uspApi.reducer,
  },
  middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware().concat(
        uspApi.middleware
    ),
//   devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
