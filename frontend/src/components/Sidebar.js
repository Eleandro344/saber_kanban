import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sidebar.css';
import logo from '../assets/logocomece.svg'; // coloque a imagem em src/assets/

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="img-fluid" />
      </div>
      <hr />
      <p className="welcome-text">Bem-vindo, usuário!</p>
      <nav className="nav flex-column">
        <Link to="/" className={`nav-link nav-link-beat ${location.pathname === '/' ? 'active' : ''}`}>
          <i className="fas fa-home me-2 fa-lg"></i>
          <span className="sidebar-info">Home</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
