import styles from "./fooddetailinstructions.module.css"

export default function FoodDetailInstructions({ instructions })
{
  return (
    <div className={styles.instructions}>
      <h2>Instructions:</h2>
      <ol>
        {instructions?.map((item) => (
          <li>{item.step}</li>
        ))}
      </ol>
    </div>
  );
}
