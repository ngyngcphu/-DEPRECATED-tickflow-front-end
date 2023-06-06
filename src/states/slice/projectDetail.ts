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

export const getProjectById = createAsyncThunk('projects/getById', async (projectId: string) => {
  const data = await projectDetailService.getById(projectId);
  return data;
});

export const createProject = createAsyncThunk('projects/create', async (payload: ProjectDetail) => {
  const data = await projectDetailService.create(payload);
  return data;
});

export const updateProject = createAsyncThunk(
  'projects/update',
  async ({ projectId, payload }: { projectId: string; payload: ProjectDetail }) => {
    const data = await projectDetailService.update(projectId, payload);
    return data;
  }
);

export const removeProject = createAsyncThunk('projects/delete', async (projectId: string) => {
  const data = await projectDetailService.remove(projectId);
  return data;
});

const projectDetailSlice = createSlice({
  name: 'projectDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjectById.fulfilled, (state, action) => {
        state.projectId = action.payload;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.project.push(action.payload);
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        const index = state.project.findIndex((project) => project.id === action.payload.id);
        state.project[index] = {
          ...state.project[index],
          ...action.payload
        };
      })
      .addCase(removeProject.fulfilled, (state, action) => {
        const index = state.project.findIndex((project) => project.id === action.payload.id);
        state.project.splice(index, 1);
      });
  }
});

export default projectDetailSlice.reducer;
