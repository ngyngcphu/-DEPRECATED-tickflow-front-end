import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth';
import sidebarReducer from './slice/sidebar';
import projectFieldReducer from './slice/projectField';
import projectSummaryReducer from './slice/projectSummary';
import projectDetailReducer from './slice/projectDetail';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    projectField: projectFieldReducer,
    projectSummary: projectSummaryReducer,
    projectDetail: projectDetailReducer
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
