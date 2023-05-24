import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const userStr = localStorage.getItem('user');
  let user = null;
  if (userStr) {
    user = JSON.parse(userStr);
  }
  if (!user) {
    return <Navigate to='/' />;
  }
  return !user.isAuthenticated ? <Navigate to='/' /> : <>{children}</>;
};
