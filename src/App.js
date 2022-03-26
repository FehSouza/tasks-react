import './App.css';
import './styles/theme.css';
import { Logo } from './components/Logo';
import { AddTask } from './components/AddTask';
import { WithoutTasks } from './components/WithoutTasks';
import { ButtonAddTask } from './components/ButtonAddTask';
import { useMemo, useRef, useState } from 'react';
import { CardTask } from './components/CardTask';
import { StatusCompleted } from './components/StatusCompleted';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    const text = task.trim();
    if (text.length) setTasks([...tasks, { task, id: Math.random(), completed: false }]);
    return;
  };

  const ref = useRef();

  const handleFocusAddTask = () => {
    const input = ref.current;
    input.focus();
  };

  const handleDelete = (id) => {
    const filteredTasks = tasks.filter((task) => id !== task.id);
    setTasks(filteredTasks);
  };

  const handleToggle = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  const totalTasks = useMemo(() => tasks.length, [tasks]);
  const totalTasksCompleted = useMemo(() => tasks.filter((task) => task.completed).length, [tasks]);
  const completePercentage = useMemo(() => (totalTasksCompleted * 100) / totalTasks, [totalTasks, totalTasksCompleted]);

  return (
    <main className="App">
      <Logo />
      <AddTask ref={ref} onAdd={handleAddTask} />
      {!!tasks.length && (
        <StatusCompleted value={completePercentage} quantity={`${totalTasksCompleted}/${totalTasks}`} />
      )}
      <span className="titleTasks">Todas as Tarefas</span>
      {!tasks.length && (
        <div className="content">
          <WithoutTasks />
          <ButtonAddTask onCLick={handleFocusAddTask} />
        </div>
      )}
      {tasks.map(({ task, id, completed }) => {
        return (
          <CardTask
            onDelete={handleDelete}
            task={task}
            key={id}
            id={id}
            completed={completed}
            onToggle={handleToggle}
          />
        );
      })}
    </main>
  );
}

export default App;
