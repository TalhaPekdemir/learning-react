import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <img
        className={styles.navIcon}
        src="chef-hat-svgrepo-com.svg"
        alt="Chef Hat"
      />
      <h1>Chef's Kiss</h1>
    </div>
  );
}
