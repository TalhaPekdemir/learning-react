import DateTime from "./DateTime";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Todo List</h1>
      {/* <DateTime /> */}
    </div>
  );
}
