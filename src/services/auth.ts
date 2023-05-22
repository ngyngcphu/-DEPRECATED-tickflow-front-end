import { server } from '@utils';

const login = async (username: string, password: string): Promise<string> => {
  try {
    const response = await server.post('/auth/login', {
      username,
      password
    });
    if (response.data.isAuthenticated) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('user');
};
export const authService = {
  login,
  logout
};
