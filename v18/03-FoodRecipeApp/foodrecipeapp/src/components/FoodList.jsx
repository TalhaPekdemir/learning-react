import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css";
export default function FoodList({ foodList, setFoodId }) {
  return (
    <div className={styles.listContainer}>
      {foodList?.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
