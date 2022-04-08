import { Fragment, useMemo, useRef } from 'react';
import { AddTask, ButtonAddTask, CardTask, StatusCompleted, WithoutTasks } from '../../components';
import { useTodo } from '../../context/useTodo';
import * as S from './styles';

export const Home = () => {
  const { tasks } = useTodo();

  const ref = useRef();

  const handleFocusAddTask = () => {
    const input = ref.current;
    input.focus();
  };

  const showTasks = useMemo(() => !!tasks.length, [tasks.length]);

  return (
    <Fragment>
      <AddTask ref={ref} />
      {showTasks && <StatusCompleted />}
      <S.TitleTasks>Todas as Tarefas</S.TitleTasks>
      {!showTasks && (
        <S.Content>
          <WithoutTasks />
          <ButtonAddTask onCLick={handleFocusAddTask} />
        </S.Content>
      )}
      {tasks.map(({ task, id, completed }) => (
        <CardTask task={task} key={id} id={id} completed={completed} />
      ))}
    </Fragment>
  );
};
