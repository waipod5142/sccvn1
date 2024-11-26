import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AuthContext, INITIAL_USER, IContextType } from './authHelpers';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user] = useState(INITIAL_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated && location.pathname.includes('/Dashboard')) {
      navigate('/sign-in', { state: { from: location.pathname } });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  const value: IContextType = {
    user,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
