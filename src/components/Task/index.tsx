
import { ITaskProps } from './types';

import TrashIcon from '../../assets/images/Trash.png';
import FinishedTaskOpen from '../../assets/images/checked.png';
import CircleImage from '../../assets/images/circle.png';

import './task.css';

export function Task(props: ITaskProps) {
    const {goal, isChecked, checkTask,deleteTask} = props  

    return (
        <div className='task-component-wrapper'>
          <div className='task-component-container' >
            <button onClick={() => checkTask(goal)} >
             <img src={isChecked ? FinishedTaskOpen : CircleImage}/>
            </button>
            {isChecked ? <p className='task-complete-text'>{goal}</p> : <p className='task-component-open'>{goal}</p>}
          </div>
          <button onClick={() => deleteTask(goal)} >
            <img src={TrashIcon}  />
          </button>
       </div>
  );
}
