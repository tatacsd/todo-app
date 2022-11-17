import './App.module.css';
// import { Empty } from './components/Empty';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';
import { TaskInfo } from './components/TaskInfo';

function App() {
  return (
    <>
      <Header />;
      <NewTask />
      <TaskInfo />
      <Task />
      <Task />
      <Task />
    </>
  );
}

export default App;
