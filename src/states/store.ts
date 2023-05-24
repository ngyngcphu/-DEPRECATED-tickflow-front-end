import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth';
import sidebarReducer from './slice/sidebar';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
