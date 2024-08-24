import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingScreen from '../reusable/LoadingScreen';
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = Cookies.get('access_token');
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isAuthenticated && (location.pathname.startsWith("/auth"))) {
    return <Navigate to="/dashboard" replace />;
  }

  // Jika user tidak memiliki token, redirect ke halaman utama (misal: /)
  if (!isAuthenticated && location.pathname.startsWith("/dashboard")) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
