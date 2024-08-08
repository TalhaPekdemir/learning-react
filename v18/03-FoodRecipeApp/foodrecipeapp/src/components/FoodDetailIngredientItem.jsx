import styles from "./fooddetailingredientitem.module.css";

export default function FoodDetailIngredientItem({ ingredient })
{
  
  const asFraction = (num) =>
  {
    if (num < 1)
    {
      const result = Math.floor(1 / num);
      return `1/${result}`;
    }
    else return num;
  }

  return (
    <div className={styles.itemContainer}>
      <img
        className={styles.itemImage}
        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
      />
      <label className={styles.itemLabel}>
        {asFraction(ingredient.amount)} {ingredient.unit} {"of"} {ingredient.nameClean}
      </label>
    </div>
  );
}
