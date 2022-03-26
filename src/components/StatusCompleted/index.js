import styles from './styles.module.css';

export const StatusCompleted = ({ value, quantity }) => {
  return (
    <section className={styles.containerStatusCompleted}>
      <div className={styles.wrapperStatus}>
        <span className={styles.titleStatus}>Concluídas</span>
        <span className={styles.status}>{quantity}</span>
      </div>
      <div className={styles.statusEx}>
        <div className={styles.statusIn} style={{ width: `calc(${value}% - 2px)` }}></div>
      </div>
    </section>
  );
};
