import './Global.css';
import { Header } from './components/Header';

import { useState } from 'react';
import { Tasks } from './components/Tasks';
import { ITask } from './interfaces/task';

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleTask(str: string) {
    setTasks([...tasks, { goal: str, isChecked: false }]);
  }

  function checkTask(str: string) {
    const tasksdocument = tasks.map((item) => {
      if(item.goal ===str) {
       return  { goal: str, isChecked: true }
      } else {
        return item
      }
    })
    
    setTasks(tasksdocument)
  }

  function deleteTask(str: string) {
    const tasksdocument = tasks.filter((item) => item.goal !== str)
    
    setTasks(tasksdocument)
  }


  return (
    <div>
      <Header handleTask={handleTask} />
      <div className="search-wrapper"></div>
      <Tasks data={tasks} checkTask={checkTask} deleteTask={deleteTask} />
    </div>
  );
}
