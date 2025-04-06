import React, { useEffect, useState } from 'react';
import '../styles/kanban.css';

const Kanban = () => {
  const [quadros, setQuadros] = useState([]);
  const [novoQuadro, setNovoQuadro] = useState({
    nome: '',
    responsavel: '',
    ativo: true,
    situacao: 'PROJETO NA FILA'
  });

  const token = localStorage.getItem('access');

  useEffect(() => {
    if (!token) return;

    fetch('http://localhost:8000/api/quadros/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setQuadros(data);
        } else if (Array.isArray(data.results)) {
          setQuadros(data.results);
        } else {
          setQuadros([]);
        }
      })
      .catch(err => {
        console.error('Erro ao buscar quadros:', err);
        setQuadros([]);
      });
  }, [token]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNovoQuadro({
      ...novoQuadro,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/api/quadros/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(novoQuadro)
    })
      .then(res => res.json())
      .then(data => {
        setQuadros(prev => [...prev, data]);
        setNovoQuadro({ nome: '', responsavel: '', ativo: true, situacao: 'PROJETO NA FILA' });
      });
  };

  return (
    <div className="kanban-dashboard container mt-5">
      <h3>Dashboard</h3>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row g-2">
          <div className="col-md-3">
            <input
              type="text"
              name="nome"
              className="form-control"
              placeholder="Nome do quadro"
              value={novoQuadro.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="responsavel"
              className="form-control"
              placeholder="Responsável"
              value={novoQuadro.responsavel}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <select
              name="situacao"
              className="form-select"
              value={novoQuadro.situacao}
              onChange={handleChange}
            >
              <option value="PROJETO NA FILA">PROJETO NA FILA</option>
              <option value="EM NEGOCIAÇÃO">EM NEGOCIAÇÃO</option>
              <option value="EXECUÇÃO DO TIME">EXECUÇÃO DO TIME</option>
              <option value="APRESENTAÇÃO AO CLIENTE">APRESENTAÇÃO AO CLIENTE</option>
              <option value="VALORES">VALORES</option>
              <option value="ENTREGA AO CLIENTE">ENTREGA AO CLIENTE</option>
            </select>
          </div>
          <div className="col-md-1 d-flex align-items-center">
            <label className="form-check-label me-2">Ativo:</label>
            <input
              type="checkbox"
              name="ativo"
              className="form-check-input"
              checked={novoQuadro.ativo}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-success w-100">Criar</button>
          </div>
        </div>
      </form>

      {/* Tabela */}
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Nome do quadro</th>
            <th>Responsável</th>
            <th>Status</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(quadros) ? (
            quadros.map(quadro => (
              <tr key={quadro.id}>
                <td>{quadro.nome}</td>
                <td>{quadro.responsavel}</td>
                <td>
                  <span className={`badge ${quadro.ativo ? 'bg-success' : 'bg-danger'}`}>
                    {quadro.ativo ? 'Ativo' : 'Inativo'}
                  </span>
                </td>
                <td>{quadro.situacao}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Nenhum quadro disponível.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Kanban;
