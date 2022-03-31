import * as S from './AppStyles';
import { ThemeProvider } from 'styled-components';
import {
  Logo,
  AddTask,
  WithoutTasks,
  ButtonAddTask,
  CardTask,
  StatusCompleted,
  ThemeColors,
} from './components/index.js';
import { useMemo, useRef, useState } from 'react';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/globalStyle';

function App() {
  const [tasks, setTasks] = useState([]);
  const [statusToggleTheme, setStatusToggleTheme] = useState(false);

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

  const handleToggleTheme = () => {
    setStatusToggleTheme(!statusToggleTheme);
  };

  return (
    <ThemeProvider theme={theme[statusToggleTheme ? 'light' : 'dark']}>
      <GlobalStyle /> {/* dúvida */}
      <S.Container>
        <Logo />
        <AddTask ref={ref} onAdd={handleAddTask} />
        {!!tasks.length && (
          <StatusCompleted value={completePercentage} quantity={`${totalTasksCompleted}/${totalTasks}`} />
        )}
        <S.TitleTasks>Todas as Tarefas</S.TitleTasks>
        {!tasks.length && (
          <S.Content>
            <WithoutTasks />
            <ButtonAddTask onCLick={handleFocusAddTask} />
          </S.Content>
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
        <ThemeColors status={statusToggleTheme} toggle={handleToggleTheme} />
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
