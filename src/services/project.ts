import { authHeader, server, invoke } from '@utils';

export const projectService = {
  getField: () => invoke<string[]>(server.get('/projectField', { headers: authHeader() })),
  getAll: () => invoke<AllProjects[]>(server.get('/projects', { headers: authHeader() })),
  getById: (projectId: string) =>
    invoke<Project>(server.get(`/projects/${projectId}`, { headers: authHeader() })),
  create: (payload: Project) =>
    invoke<string>(server.post('/projects', payload, { headers: authHeader() })),
  update: (projectId: string, payload: Project) =>
    invoke<string>(server.put(`/projects/${projectId}`, payload, { headers: authHeader() })),
  delete: (projectId: string) =>
    invoke<string>(server.delete(`/projects/${projectId}`, { headers: authHeader() }))
};
