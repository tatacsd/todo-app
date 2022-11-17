import css from './TaskInfo.module.css';

export function TaskInfo() {
  return (
    <div className={css.container}>
      <div>
        <p>
          Tarefas criadas <span>0</span>
        </p>
      </div>
      <div>
        <p>
          Concluídas <span>0</span>
        </p>
      </div>
    </div>
  );
}
