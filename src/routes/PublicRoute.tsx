import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../module/auth/hooks/useAuth';

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoute;