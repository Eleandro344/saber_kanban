import React from 'react';
import '../styles/header.css';
import logo from '../assets/logocomece.svg';

const Header = () => {
  return (
    <header className="custom-header text-center">
      <img src={logo} alt="Logo" className="img-fluid" />
      <p className="header-text"></p>
    </header>
  );
};

export default Header;
