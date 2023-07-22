import { useNavigate } from 'react-router-dom';
import { useAutH } from '../contexts/FakeAuhtContex';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAutH();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
