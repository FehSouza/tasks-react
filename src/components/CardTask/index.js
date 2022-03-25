import styles from './styles.module.css';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';

export const CardTask = ({ task, id, completed, onDelete, onToggle }) => {
  const handleToggle = () => onToggle(id);
  const handleDelete = () => onDelete(id);
  const handlePressEnter = (fn) => {
    return (e) => e.key === 'Enter' && fn();
  };
  return (
    <div className={styles.containerCardTask}>
      <FaTrashAlt
        className={styles.buttonDelete}
        alt="A imagem consiste em um desenho de uma lixeira na cor vermelha."
        tabIndex={0}
        onClick={handleDelete}
        onKeyDown={handlePressEnter(handleDelete)}
      />
      <span className={styles.textTask}>{task}</span>
      <div className={styles.checkTask} tabIndex={0} onClick={handleToggle} onKeyDown={handlePressEnter(handleToggle)}>
        {completed && (
          <FaCheck className={styles.checkIcon} alt="A imagem consiste em um desenho de um check na cor verde." />
        )}
      </div>
    </div>
  );
};
