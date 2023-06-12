import { Fragment } from 'react';
import { Empty } from '../Empty';
import { Task } from '../Task';
import './Tasks.css';
import { ITaskProps } from './types';


export function Tasks(props: ITaskProps) {
  const { data,checkTask, deleteTask } = props;

  const isChecked = data.filter((item) => item.isChecked)

  return (
    <Fragment>
      <div className="info">
        <div>
          <section>
            <p className="tarefas">Tarefas criadas</p>
            <span className="counter">{data.length}</span>
          </section>

          <section>
            <p className="completed">concluidas</p>
            <span className="counter">{isChecked.length} de {data.length}</span>
          </section>
        </div>
      </div>
      {!!data.length ? (
        <div className="task-wrapper">
          {data.map((item) => {
            return <Task deleteTask={deleteTask} checkTask={checkTask} isChecked={item.isChecked} goal={item.goal}/>;
          })}
        </div>
      ) : (
        <Empty />
      )}
    </Fragment>
  );
}
