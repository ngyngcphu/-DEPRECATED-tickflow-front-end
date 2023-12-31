import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    collapse: false
  },
  reducers: {
    setCollapse: (state, action) => {
      state.collapse = action.payload;
    }
  }
});

export const { setCollapse } = sidebarSlice.actions;
export default sidebarSlice.reducer;
