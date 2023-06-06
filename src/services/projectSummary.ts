import { authHeader, server, invoke } from '@utils';

export const projectSummaryService = {
  getAll: () =>
    invoke<ProjectSummary[]>(server.get('/auth/login/projects', { headers: authHeader() })),
  getbyTag: (tag: string) =>
    invoke<ProjectSummary[]>(server.get(`/auth/login/projects?status=${tag}`))
};
