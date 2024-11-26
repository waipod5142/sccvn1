import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();

  const getIdFromLocalStorage = () => {
    const storedData = JSON.parse(localStorage.getItem('inseeId') || '[]');
    return storedData.length > 0 ? storedData[0].id : null;
  };

  useEffect(() => {
    const storedId = getIdFromLocalStorage();
    if (storedId) {
      navigate(`/${storedId}`);
    }
  }, [navigate]);

  return null;
};

export default Redirect;
