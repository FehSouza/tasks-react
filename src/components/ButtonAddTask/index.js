import styles from './styles.module.css';

export const ButtonAddTask = ({ onCLick }) => {
  return (
    <button className={styles.buttonAdd} onClick={onCLick}>
      Cadastrar uma tarefa agora
    </button>
  );
};
