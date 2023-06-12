export interface ITaskProps {
  goal:string
  isChecked: boolean
  checkTask(str: string): void
  deleteTask(str: string): void
}