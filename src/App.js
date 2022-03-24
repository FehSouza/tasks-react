import './App.css';
import './styles/theme.css';
import { Logo } from './components/Logo';
import { AddTask } from './components/AddTask';
import { WithoutTasks } from './components/WithoutTasks';
import { ButtonAddTask } from './components/ButtonAddTask';
import { useRef, useState } from 'react';
import { CardTask } from './components/CardTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    const value = task.trim();

    if (value.length) setTasks([...tasks, { id: Math.random(), task, completed: false }]);
    return;
  };

  const ref = useRef();

  const handleFocusAddTask = () => {
    const input = ref.current;
    input.focus();
  };

  return (
    <div className="App">
      <Logo />
      <AddTask ref={ref} onAdd={handleAddTask} />
      <span className="titleTasks">Todas as Tarefas</span>
      {!tasks.length && (
        <div className="content">
          <WithoutTasks />
          <ButtonAddTask onCLick={handleFocusAddTask} />
        </div>
      )}
      {tasks.map(({ task, id, completed }) => {
        return <CardTask key={id} task={task} completed={completed} />;
      })}
    </div>
  );
}

export default App;
