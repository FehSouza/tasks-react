import styles from './styles.module.css';
import deleteIcon from '../../assets/delete.svg';

export const CardTask = ({ task }) => {
  const handleDelete = () => {
    console.log('clicou delete');
  };

  const handleCheck = () => {
    console.log('clicou check');
  };

  return (
    <div className={styles.containerCardTask}>
      <img
        className={styles.buttonDelete}
        src={deleteIcon}
        alt="A imagem consiste em um desenho de uma lixeira na cor vermelha."
        onClick={handleDelete}
      ></img>
      <span className={styles.textTask}>{task}</span>
      <div className={styles.checkTask} onClick={handleCheck}></div>
      <p></p>
    </div>
  );
};
