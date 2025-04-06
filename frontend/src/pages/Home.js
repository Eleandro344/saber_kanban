import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/home.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const button = document.getElementById('rotateButton');

    if (button) {
      button.addEventListener('mouseover', () => {
        button.classList.add('rotate');
      });

      button.addEventListener('mouseout', () => {
        button.classList.remove('rotate');
      });
    }

    return () => {
      if (button) {
        button.removeEventListener('mouseover', () => {});
        button.removeEventListener('mouseout', () => {});
      }
    };
  }, []);

  return (
    <div className="content d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <button
        className="btn btn-danger logout-button"
        onClick={() => navigate('/logout')}
      >
        Sair
      </button>

      <div className="animation-container d-flex justify-content-center align-items-center" style={{ margin: '50px 0' }}>
        <iframe
          className="animation3"
          src="https://lottie.host/embed/45af3a4c-75e6-42ba-b74b-c9a98e1639a3/r2rPa6bgO4.json"
          title="Lottie Animation"
          style={{
            width: '400px',
            height: '500px',
            border: 'none',
            marginTop: '100px',
            marginLeft: '-100px'
          }}
        />
      </div>

      <div className="d-flex justify-content-center mb-5">
        <button
          id="rotateButton"
          className="btn custom-button btn-lg active"
          onClick={() => navigate('/home')}
        >
          Continuar para o menu principal
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
