import { useMemo } from 'react';
import { useTodo } from '../../context/useTodo';
import * as S from './styles';

export const StatusCompleted = ({ value, quantity }) => {
  const { tasks } = useTodo();
  const totalTasks = useMemo(() => tasks.length, [tasks.length]);
  const totalTasksCompleted = useMemo(() => tasks.filter((task) => task.completed).length, [tasks]);
  const completePercentage = useMemo(() => (totalTasksCompleted * 100) / totalTasks, [totalTasksCompleted, totalTasks]);
  return (
    <S.Container>
      <S.WrapperStatus>
        <S.TitleStatus>Concluídas</S.TitleStatus>
        <S.Status>
          {totalTasksCompleted}/{totalTasks}
        </S.Status>
      </S.WrapperStatus>
      <S.StatusEx>
        <S.StatusIn width={completePercentage}></S.StatusIn>
      </S.StatusEx>
    </S.Container>
  );
};
