import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import css from './NewTask.module.css';

interface NewTaskProps {
  onCreatedTask: (text: string) => void;
}

export function NewTask({ onCreatedTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState('');

  const handleCreatNewTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onCreatedTask(newTask);
    setNewTask('');
  };

  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    setNewTask(event.currentTarget.value);
  };

  return (
    <div>
      <form
        className={css.form}
        onSubmit={(event) => handleCreatNewTask(event)}
      >
        <input
          type="text"
          required
          placeholder="Add a new task"
          name="newTask"
          value={newTask}
          onChange={(event) => handleOnChange(event)}
        />
        <button type="submit">
          Add <PlusCircle size={20} />
        </button>
      </form>
    </div>
  );
}
