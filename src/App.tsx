import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.module.css';
import { Empty } from './components/Empty';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Task, TaskProps } from './components/Task';
import { TaskInfo } from './components/TaskInfo';

const tasks: TaskProps[] = [
  {
    id: uuid(),
    isChecked: false,
    text: 'Integer urna',
  },
  {
    id: uuid(),
    isChecked: false,
    text: 'Integer urna',
  },
  {
    id: uuid(),
    isChecked: false,
    text: 'Integer urna',
  },
];

function App() {
  const [tasksList, setTasksList] = useState(tasks);

  const handleAddNewTask = (text: string) => {
    const newTask = {
      id: uuid(),
      isChecked: false,
      text,
    };
    setTasksList([...tasksList, newTask]);
    console.log('add new task from App.tsx');
  };

  console.log(tasksList);

  const handleOnCheck = (id: string) => {
    console.log('add task', id);
    const newTasksList = tasksList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: !task.isChecked,
        };
      }
      return task;
    });
    setTasksList(newTasksList);
  };

  const handleOnDelete = (id: string) => {
    console.log('delete task', id);
    const newTasksList = tasksList.filter((task) => task.id !== id);
    setTasksList(newTasksList);
  };

  const numCompletedTasks = tasksList.filter((task) => task.isChecked).length;

  return (
    <>
      <Header />;
      <NewTask onCreatedTask={handleAddNewTask} />
      <TaskInfo
        createdTasks={tasksList.length}
        completedTasks={numCompletedTasks}
      />
      {tasksList.length <= 0 ? (
        <Empty />
      ) : (
        tasksList.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            isChecked={task.isChecked}
            text={task.text}
            onCheck={handleOnCheck}
            onDelete={handleOnDelete}
          />
        ))
      )}
    </>
  );
}

export default App;
