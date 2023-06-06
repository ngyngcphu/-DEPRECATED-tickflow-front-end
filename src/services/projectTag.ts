import { authHeader, server, invoke } from '@utils';

export const projectTagService = {
  getTag: () => invoke<string[]>(server.get('/auth/login/projectTag', { headers: authHeader() }))
};
