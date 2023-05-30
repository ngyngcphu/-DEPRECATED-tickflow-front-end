import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { projectSummaryService } from '@services';

const initialState: ProjectSummary[] = [];

export const getAll = createAsyncThunk('projects/getAll', async () => {
  const data = await projectSummaryService.getAll();
  return data;
});

const projectSummarySlice = createSlice({
  name: 'projectAll',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state = action.payload;
    });
  }
});

export default projectSummarySlice.reducer;
