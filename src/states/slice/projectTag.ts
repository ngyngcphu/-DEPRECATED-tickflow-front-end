import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { projectTagService } from '@services';

const initialState: { projectTag: string[] } = { projectTag: [] };

export const getProjectTag = createAsyncThunk('projects/getTag', async () => {
  const data = await projectTagService.getTag();
  return data;
});

const projectTagSlice = createSlice({
  name: 'projectTag',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjectTag.fulfilled, (state, action) => {
      state.projectTag = action.payload;
    });
  }
});

export default projectTagSlice.reducer;
