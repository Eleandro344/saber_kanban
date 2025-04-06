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

  // Header só aparece nas rotas que não estiverem aqui
  const hideHeaderRoutes = ['/login', '/kanban', '/tarefas'];
  const isHeaderHidden = hideHeaderRoutes.includes(location.pathname);

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar aparece sempre, exceto na /login */}
      {location.pathname !== '/login' && <Sidebar />}
      
      <div style={{ marginLeft: location.pathname !== '/login' ? '6rem' : '0', padding: '2rem', width: '100%' }}>
        {/* Header aparece só quando permitido */}
        {!isHeaderHidden && <Header />}
        {children}
      </div>
    </div>
  );
};


function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
        {/* Login e logout são públicos */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
             {/* Rotas privadas protegidas por token */}
          <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/tarefas" element={<Tarefas />} />

          {/* Adicione outras rotas privadas aqui */}
          </Route>

        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
