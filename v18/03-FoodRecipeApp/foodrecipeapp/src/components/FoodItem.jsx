import styles from "./fooditem.module.css";

export default function FoodItem({ food }) {
  return (
    <div className={styles.itemCard}>
      <img className={styles.cardImage} src={food.image} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardText}>{food.title}</h3>
      </div>
      <div className={styles.cardButtonContainer}>
        <button className={styles.cardButton}>Show Recipe</button>
      </div>
    </div>
  );
}
