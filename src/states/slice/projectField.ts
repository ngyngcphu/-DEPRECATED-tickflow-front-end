import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { projectFieldService } from '@services';

const initialState: string[] = [];

export const getField = createAsyncThunk('projects/getField', async () => {
  const data = await projectFieldService.getField();
  return data;
});

const projectFieldSlice = createSlice({
  name: 'projectField',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getField.fulfilled, (state, action) => {
      state = action.payload;
    });
  }
});

export default projectFieldSlice.reducer;
