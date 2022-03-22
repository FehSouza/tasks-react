import './App.css';
import './styles/theme.css';
import { Logo } from './components/Logo';
import { AddTask } from './components/AddTask';
import { WithoutTasks } from './components/WithoutTasks';
import { ButtonAddTask } from './components/ButtonAddTask';
import { useState } from 'react';

function App() {
  const [showWithoutTasks, setShowWithoutTasks] = useState(true);
  const [tasks, setTasks] = useState([]);
  const handleToggle = (value) => {
    setShowWithoutTasks(!showWithoutTasks);
    setTasks([...tasks, value]);
  };

  return (
    <div className="App">
      <Logo />
      <AddTask onAdd={handleToggle} />
      <span className="titleTasks">Todas as Tarefas</span>
      {!tasks.length && (
        <div className="content">
          <WithoutTasks />
          <ButtonAddTask onCLick={handleToggle} />
        </div>
      )}
      {tasks.map((item) => {
        return <div style={{ color: 'white' }}>{item}</div>;
      })}
    </div>
  );
}

export default App;
