import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'; // (criaremos depois)

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
      navigate('/');
    } else {
      setErro('Email ou senha inválidos');
    }
  };

  return (
    <div className="container login-container">
      <div className="login-form bg-light shadow-sm p-5 rounded">
        <h4 className="mb-4">Login</h4>
        {erro && <div className="alert alert-danger">{erro}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email:</label>
            <input type="email" className="form-control" required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Senha:</label>
            <input type="password" className="form-control" required value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Entrar</button>
        </form>
        <div className="mt-3">
          <p>Ainda não tem conta? <a href="https://wa.me/5551980334705">Cadastre-se</a></p>
          <p>Esqueceu sua senha? <a href="https://wa.me/5551980334705">Resetar</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
