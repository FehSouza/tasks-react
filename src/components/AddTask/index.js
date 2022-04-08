import { useState, forwardRef } from 'react';
import { useTodo } from '../../context/useTodo';
import * as S from './styles';

export const AddTask = forwardRef((_, ref) => {
  const {addTask} = useTodo()
  const [value, setValue] = useState('');

  const handleWrite = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    addTask(value);
    setValue('');
  };

  const handlePressEnter = (fn) => {
    return (e) => e.key === 'Enter' && fn();
  };

  return (
    <S.Container>
      <S.InputTask
        ref={ref}
        value={value}
        onChange={(event) => handleWrite(event)}
        onKeyDown={handlePressEnter(handleClick)}
        placeholder="Digite uma tarefa"
      ></S.InputTask>
      <S.ButtonAddTask onClick={handleClick}>ADD</S.ButtonAddTask>
    </S.Container>
  );
});
