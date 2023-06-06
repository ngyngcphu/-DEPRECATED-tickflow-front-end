import { authHeader, server, invoke } from '@utils';

export const projectTagService = {
  getTag: () => invoke<string[]>(server.get('/projectTag', { headers: authHeader() }))
};
