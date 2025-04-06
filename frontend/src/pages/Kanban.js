import React, { useState } from 'react';
import '../styles/kanban.css';

const Kanban = () => {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar React', concluida: false },
    { id: 2, titulo: 'Criar API com Django', concluida: true }
  ]);

  return (
    <div className="kanban-page">
      <h2 className="mb-4">📅 Kanban</h2>
      <ul className="list-group">
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${tarefa.concluida ? 'list-group-item-success' : ''}`}
          >
            {tarefa.titulo}
            <span>{tarefa.concluida ? '✅' : '🕒'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kanban;
