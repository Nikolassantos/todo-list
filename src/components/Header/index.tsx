import React, { useState } from 'react';
import './Header.css';
import todoLogo from '../../assets/todo-logo.svg';
import { Input } from '../Input';
import { Button } from '../Button';
import { IHeaderProps } from './types';

export function Header(props: IHeaderProps) {
  const { handleTask } = props;

  const [task, setTask] = useState('');

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  return (
    <div>
      <header className="header-wrapper">
        <img src={todoLogo} alt="logotipo todo" />
      </header>
      <div className="search-wrapper">
        <Input onChange={handleChangeInput} />
        <Button onClick={() => handleTask(task)} label={''} />
      </div>
    </div>
  );
}
