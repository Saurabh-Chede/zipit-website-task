import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

// Login / signup pages: signed-in users go straight to the dashboard.
export default function PublicOnlyRoute() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
}
