import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemCard}>
      <img className={styles.cardImage} src={food.image} alt={food.title} />

      <h3 className={styles.cardText}>{food.title}</h3>

      <button className={styles.cardButton} onClick={() => setFoodId(food.id)}>
        Show Recipe
      </button>
    </div>
  );
}
