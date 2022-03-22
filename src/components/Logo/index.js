import styles from './styles.module.css';
import logo from '../../assets/logo.svg';

export const Logo = () => {
  return (
    <div className={styles.containerLogo}>
      <img
        src={logo}
        className={styles.logo}
        alt="A imagem consiste em um círculo com o fundo na cor azul, e no meio do círculo há o desenho de um raio na cor branca."
      ></img>
      <h1 className={styles.title}>Tasks</h1>
    </div>
  );
};
