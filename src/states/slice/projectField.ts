import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { projectFieldService } from '@services';

const initialState: { projectField: string[] } = { projectField: [] };

export const getProjectField = createAsyncThunk('projects/getField', async () => {
  const data = await projectFieldService.getField();
  return data;
});

const projectFieldSlice = createSlice({
  name: 'projectField',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjectField.fulfilled, (state, action) => {
      state.projectField = action.payload;
    });
  }
});

export default projectFieldSlice.reducer;
