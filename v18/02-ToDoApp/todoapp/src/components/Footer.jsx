import styles from "./Footer.module.css";

export default function Footer({ total, completed, unfinished }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total Tasks:{total}</span>
      <span className={styles.item}>Completed Tasks:{completed}</span>
      <span className={styles.item}>Remaining Tasks:{unfinished}</span>
    </div>
  );
}
