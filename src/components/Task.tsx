import { CheckCircle, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { TaskProps } from '../App'

interface Props {
  task: TaskProps
  onDeleteTask: (taskId: string) => void
  onComplete: (taskid: string) => void
}

export function Task({task, onComplete, onDeleteTask}: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() =>onComplete(task.id)}>
        {task.isCompleted ? <CheckCircle /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.taskCompleted : ''}>
        {task.title}
      </p>
      <button className={styles.deleteButton} onClick={() => onDeleteTask(task.id)} >
        <Trash size={20}/>
      </button>
    </div>
  )
}