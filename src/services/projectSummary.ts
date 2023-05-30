import { authHeader, server, invoke } from '@utils';

export const projectSummaryService = {
  getAll: () => invoke<ProjectSummary[]>(server.get('/projects', { headers: authHeader() }))
};
