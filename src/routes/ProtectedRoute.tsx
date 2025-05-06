import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../module/auth/hooks/useAuth';

const ProtectedRoute = () => {
    
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;