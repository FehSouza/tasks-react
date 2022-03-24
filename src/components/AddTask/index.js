import { useState, forwardRef } from 'react';
import styles from './styles.module.css';

export const AddTask = forwardRef(({ onAdd }, ref) => {
  const [value, setValue] = useState('');

  const handleWrite = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.containerAddTask}>
      <input
        ref={ref}
        value={value}
        onChange={(event) => handleWrite(event)}
        className={styles.inputTask}
        placeholder="Digite uma tarefa"
      ></input>
      <button
        onClick={() => {
          onAdd(value);
          setValue('');
        }}
        className={styles.buttonAdd}
      >
        ADD
      </button>
    </div>
  );
});
