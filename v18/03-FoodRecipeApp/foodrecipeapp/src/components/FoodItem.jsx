import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemCard}>
      <img className={styles.cardImage} src={food.image} alt={food.title} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardText}>{food.title}</h3>
      </div>
      <div className={styles.cardButtonContainer}>
        <button
          className={styles.cardButton}
          onClick={() => setFoodId(food.id)}
        >
          Show Recipe
        </button>
      </div>
    </div>
  );
}
