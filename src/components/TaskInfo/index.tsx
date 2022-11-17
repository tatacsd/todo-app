import css from './TaskInfo.module.css';

interface TaskInfoProps {
  createdTasks: number;
  completedTasks: number;
}

export function TaskInfo({ createdTasks, completedTasks }: TaskInfoProps) {
  return (
    <div className={css.container}>
      <div>
        <p>
          Tarefas criadas <span>{createdTasks}</span>
        </p>
      </div>
      <div>
        <p>
          Concluídas{' '}
          <span>
            {createdTasks === 0 ? '0' : `${completedTasks} of ${createdTasks}`}
          </span>
        </p>
      </div>
    </div>
  );
}
