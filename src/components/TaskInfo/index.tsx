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
          Created Tasks <span>{createdTasks}</span>
        </p>
      </div>
      <div>
        <p>
          Completed Tasks
          <span>
            {createdTasks === 0 ? '0' : `${completedTasks} of ${createdTasks}`}
          </span>
        </p>
      </div>
    </div>
  );
}
