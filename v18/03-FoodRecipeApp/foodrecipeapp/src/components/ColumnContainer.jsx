import styles from "./columncontainer.module.css";

// TEST
export default function ColumnContainer({ children }) {
  return <div className={styles.columnContainer}>{children}</div>;
}
