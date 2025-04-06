import React, { useEffect, useState } from 'react';
import '../styles/tarefas.css';

const etapas = [
  'PROJETO NA FILA',
  'EM NEGOCIAÇÃO',
  'EXECUÇÃO DO TIME',
  'APRESENTAÇÃO AO CLIENTE',
  'VALORES',
  'ENTREGA AO CLIENTE'
];

const Tarefas = () => {
  const [quadros, setQuadros] = useState([]);
  const token = localStorage.getItem('access');

  useEffect(() => {
    fetch('http://localhost:8000/api/quadros/', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setQuadros(data);
      });
  }, [token]);

  return (
    <div className="kanban-container mt-4">
      <h3 className="mb-4">Quadros por Etapas</h3>
      <div className="row">
        {etapas.map((etapa, idx) => (
          <div key={idx} className="col-md-2 kanban-col">
            <div className="kanban-header">{etapa}</div>
            <div className="kanban-cards">
              {quadros
                .filter(quadro => quadro.situacao === etapa)
                .map(quadro => (
                  <div key={quadro.id} className="kanban-card">
                    <strong>{quadro.nome}</strong>
                    <p>{quadro.responsavel}</p>
                  </div>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tarefas;
