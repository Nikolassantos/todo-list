import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';
import plus from '../../assets/plus.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  label: string;
}

export function Button(props: ButtonProps) {
  const { label, ...rest } = props;

  return (
    <div className="newtask">
      <button {...rest} className="button">
        {label}
        <p className="criar">Criar</p>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
}
