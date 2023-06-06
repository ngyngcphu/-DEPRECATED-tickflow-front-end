import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { projectSummaryService } from '@services';

const initialState: { projectSummary: ProjectSummary[] } = { projectSummary: [] };

export const getAllProjects = createAsyncThunk('projects/getAll', async () => {
  const data = await projectSummaryService.getAll();
  return data;
});

export const getProjectByTag = createAsyncThunk('projects/getByTag', async (tag: string) => {
  const data = await projectSummaryService.getbyTag(tag);
  return data;
});

const projectSummarySlice = createSlice({
  name: 'projectSummary',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.projectSummary = action.payload;
      })
      .addCase(getProjectByTag.fulfilled, (state, action) => {
        state.projectSummary = action.payload;
      });
  }
});

export default projectSummarySlice.reducer;
