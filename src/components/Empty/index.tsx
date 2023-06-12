import React from 'react';
import Clipboard from '../../assets/Clipboard.svg';
import './Empty.css';

export function Empty() {
  return (
    <div className="empty">
      <div className="separator" />
      <img src={Clipboard} alt="Clipboard" />
      <div>
        <p className="text_wrapper">
          <p className="text">Você ainda não tem tarefas cadastradas</p>
          <p className="text_2">Crie tarefas e organize seus itens a fazer</p>
        </p>
      </div>
    </div>
  );
}
