import { useTodo } from '../../context/useTodo';
import * as S from './styles';

export const CardTask = ({ task, id, completed }) => {
  const { deleteTask, toggleTask } = useTodo();
  
  const handleToggle = () => toggleTask(id);
  const handleDelete = () => deleteTask(id);

  const handlePressEnter = (fn) => {
    return (e) => e.key === 'Enter' && fn();
  };

  return (
    <S.Container>
      <S.DeleteIcon
        alt="A imagem consiste em um desenho de uma lixeira na cor vermelha."
        onClick={handleDelete}
        onKeyDown={handlePressEnter(handleDelete)}
      />
      <S.TextTask>{task}</S.TextTask>
      <S.CheckTask onClick={handleToggle} onKeyDown={handlePressEnter(handleToggle)}>
        {completed && <S.CheckIcon alt="A imagem consiste em um desenho de um check na cor verde." />}
      </S.CheckTask>
    </S.Container>
  );
};
