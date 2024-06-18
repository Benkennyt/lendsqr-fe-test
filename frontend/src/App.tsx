import { useEffect } from 'react';
import './App.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/login');
    }
  }, [location, navigate]);

  return (
    <div className='app'>
      <Outlet />
    </div>
  );
}

export default App;
