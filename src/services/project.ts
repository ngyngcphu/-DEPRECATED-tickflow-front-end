import { server, invoke } from './server';

export const projectService = {
  getField: () => invoke<string[]>(server.get('/projectField')),
  getAll: () => invoke<AllProjects[]>(server.get('/projects')),
  getById: (projectId: string) => invoke<Project>(server.get(`/projects/${projectId}`)),
  create: (payload: Project) => invoke<string>(server.post('/projects', payload)),
  update: (projectId: string, payload: Project) =>
    invoke<string>(server.put(`/projects/${projectId}`, payload)),
  delete: (projectId: string) => invoke<string>(server.delete(`/projects/${projectId}`))
};
