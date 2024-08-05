import { useEffect, useState } from "react";
import { RECIPES_URL } from "../../utils/consts/spoonacularapi-endpoints";

import styles from "./fooddetails.module.css";

export default function FoodDetails({ foodId }) {
  const [information, setInformation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (foodId) {
      fetch(`${RECIPES_URL}/${foodId}/information`, {
        method: "GET",
        headers: { "x-api-key": import.meta.env.VITE_SPOONACULAR_API_KEY },
      })
        .then((res) => res.json())
        .then((data) => setInformation(data) + setIsLoading(false))
        .catch((error) => console.error(error));
    }
  }, [foodId]);

  return (
    <div className={styles.infoCard}>
      <div>
        <h1 className={styles.infoText}>{information.title}</h1>
        <img
          className={styles.infoImage}
          src={information.image}
          alt={information.title}
        />
      </div>
      {isLoading ? null : (
        <div className={styles.instructions}>
          <h2>Instructions:</h2>
          <ol>
            {information?.analyzedInstructions[0].steps?.map((item) => (
              <li>{item.step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
