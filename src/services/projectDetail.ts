import { authHeader, server, invoke } from '@utils';

export const projectDetailService = {
  getById: (projectId: string) =>
    invoke<ProjectDetail>(server.get(`/projects/${projectId}`, { headers: authHeader() })),
  create: (payload: ProjectDetail) =>
    invoke<ProjectDetail>(server.post('/projects', payload, { headers: authHeader() })),
  update: (projectId: string, payload: ProjectDetail) =>
    invoke<ProjectDetail>(server.put(`/projects/${projectId}`, payload, { headers: authHeader() })),
  remove: (projectId: string) =>
    invoke<ProjectDetail>(server.delete(`/projects/${projectId}`, { headers: authHeader() }))
};
