import FoodDetailIngredientItem from "./FoodDetailIngredientItem";

import styles from "./fooddetailingredients.module.css";

export default function FoodDetailIngredients({ ingredients }) {
  return (
    <div>
      <h2>Ingredients:</h2>
      <div className={styles.ingredientContainer}>
        {ingredients?.map((item) => (
          <FoodDetailIngredientItem key={item.id} ingredient={item} />
        ))}
      </div>
    </div>
  );
}
