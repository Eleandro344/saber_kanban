import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="text-footer text-white text-center py-3 fixed-bottom">
      <div className="container d-flex justify-content-between">
        <span className="footer-left">© 2024 Trimed Financ. Todos os direitos reservados.</span>
        <span className="footer-right">Desenvolvido por Eleandro S. Martins</span>
      </div>
    </footer>
  );
};

export default Footer;
