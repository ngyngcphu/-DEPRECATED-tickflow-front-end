import { authHeader, server, invoke } from '@utils';

export const projectFieldService = {
  getField: () =>
    invoke<string[]>(server.get('/auth/login/projectField', { headers: authHeader() }))
};
