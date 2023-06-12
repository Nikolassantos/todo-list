import React from 'react';
import './Input.css';
import { InputProps } from './types';

export function Input(props: InputProps) {
  return (
    <div className="newtask">
      <input
        className="wrapper"
        type="text"
        name="tarefas"
        id="tarefas"
        placeholder="Adicione uma nova tarefa"
        {...props}
      />
    </div>
  );
}
