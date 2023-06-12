import { ITask } from '../../interfaces/task';

export interface ITaskProps {
  data: ITask[];
  checkTask(str: string): void
  deleteTask(str: string): void
}
