import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import PrivateRoute from './routes/PrivateRoute';
import Kanban from './pages/Kanban';
import Tarefas from './pages/Tarefas';

const LayoutWrapper = ({ children }) => {
  const location = useLocation();

  const hideHeaderRoutes = ['/login', '/kanban', '/tarefas'];
  const isHeaderHidden = hideHeaderRoutes.includes(location.pathname);

  return (
    <div style={{ display: 'flex' }}>
      {location.pathname !== '/login' && <Sidebar />}
      <div style={{ marginLeft: location.pathname !== '/login' ? '6rem' : '0', padding: '2rem', width: '100%' }}>
        {!isHeaderHidden && <Header />}
        {children}
      </div>
    </div>
  );
};

function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      const refreshToken = localStorage.getItem('refresh');

      if (refreshToken) {
        fetch('http://localhost:8000/api/token/refresh/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refresh: refreshToken }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.access) {
              localStorage.setItem('access', data.access);
            }
          })
          .catch(err => console.error("Erro ao renovar token:", err));
      }
    }, 4 * 60 * 1000); // a cada 4 minutos

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/tarefas" element={<Tarefas />} />
          </Route>
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
