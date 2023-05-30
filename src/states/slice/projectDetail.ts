import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { projectDetailService } from '@services';

const initialState: { projectId: ProjectDetail; project: ProjectDetail[] } = {
  projectId: {
    id: 0,
    name: '',
    startDate: '',
    endDate: '',
    department: '',
    status: '',
    totalMember: 0,
    leaderName: '',
    projectRole: [],
    projectLog: []
  },
  project: []
};

export const getById = createAsyncThunk('projects/getById', async (projectId: string) => {
  const data = await projectDetailService.getById(projectId);
  return data;
});

export const create = createAsyncThunk('projects/create', async (payload: ProjectDetail) => {
  const data = await projectDetailService.create(payload);
  return data;
});

export const update = createAsyncThunk(
  'projects/update',
  async ({ projectId, payload }: { projectId: string; payload: ProjectDetail }) => {
    const data = await projectDetailService.update(projectId, payload);
    return data;
  }
);

export const remove = createAsyncThunk('projects/delete', async (projectId: string) => {
  const data = await projectDetailService.remove(projectId);
  return data;
});

const projectDetailSlice = createSlice({
  name: 'projectInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getById.fulfilled, (state, action) => {
        state.projectId = action.payload;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.project.push(action.payload);
      })
      .addCase(update.fulfilled, (state, action) => {
        const index = state.project.findIndex((project) => project.id === action.payload.id);
        state.project[index] = {
          ...state.project[index],
          ...action.payload
        };
      })
      .addCase(remove.fulfilled, (state, action) => {
        const index = state.project.findIndex((project) => project.id === action.payload.id);
        state.project.splice(index, 1);
      });
  }
});

export default projectDetailSlice.reducer;
