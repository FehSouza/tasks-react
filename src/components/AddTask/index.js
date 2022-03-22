import { useState } from 'react';
import styles from './styles.module.css';

export const AddTask = ({ onAdd }) => {
  const [value, setValue] = useState('');
  return (
    <div className={styles.containerAddTask}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={styles.inputTask}
        placeholder="Digite uma tarefa"
      ></input>
      <button onClick={() => onAdd(value)} className={styles.buttonAdd}>
        ADD
      </button>
    </div>
  );
};
