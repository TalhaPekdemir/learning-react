import styles from "./fooddetailheader.module.css";

export default function FoodDetailHeader({ image, title }) {
  return (
    <div>
      <h1 className={styles.infoText}>{title}</h1>
      <img className={styles.infoImage} src={image} alt={title} />
    </div>
  );
}
