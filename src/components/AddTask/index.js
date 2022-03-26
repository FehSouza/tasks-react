import { useState, forwardRef } from 'react';
import styles from './styles.module.css';

export const AddTask = forwardRef(({ onAdd }, ref) => {
  const [value, setValue] = useState('');

  const handleWrite = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    onAdd(value);
    setValue('');
  };

  const handlePressEnter = (fn) => {
    return (e) => e.key === 'Enter' && fn();
  };

  return (
    <div className={styles.containerAddTask}>
      <input
        ref={ref}
        value={value}
        onChange={(event) => handleWrite(event)}
        onKeyDown={handlePressEnter(handleClick)}
        className={styles.inputTask}
        placeholder="Digite uma tarefa"
      ></input>
      <button onClick={handleClick} className={styles.buttonAdd}>
        ADD
      </button>
    </div>
  );
});
