import { PlusCircle } from 'phosphor-react';
import css from './NewTask.module.css';
export function NewTask() {
  return (
    <div>
      <form className={css.form}>
        <input type="text" required placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar <PlusCircle size={16} color="#fdfcfc" weight="bold" />
        </button>
      </form>
    </div>
  );
}
