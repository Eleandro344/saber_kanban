import React from 'react';
import '../styles/header.css';
import logo from '../assets/logocomece.svg'; // Certifique-se de que o logo está na pasta certa

const Header = () => {
  return (
    <header className="custom-header text-center">
      <img src={logo} alt="Logo" className="img-fluid" />
      <p className="header-text">Saber Comece</p>
    </header>
  );
};

export default Header;
