import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    navigate('/login');
  }, [navigate]);

  return null; // não precisa mostrar nada
};

export default Logout;
