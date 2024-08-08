import { useEffect, useState } from "react";
import { RECIPES_URL } from "../../utils/consts/spoonacularapi-endpoints";

import styles from "./fooddetails.module.css";
import FoodDetailIngredients from "./FoodDetailIngredients";
import FoodDetailInstructions from "./FoodDetailInstructions";
import FoodDetailHeader from "./FoodDetailHeader";
import FoodDetailExtra from "./FoodDetailExtra";

export default function FoodDetails({ foodId }) {
  const [information, setInformation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const scrollToTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (foodId) {
      fetch(`${RECIPES_URL}/${foodId}/information`, {
        method: "GET",
        headers: { "x-api-key": import.meta.env.VITE_SPOONACULAR_API_KEY },
      })
        .then((res) => res.json())
        .then(
          (data) =>
            setInformation(data) +
            setIsLoading(false) +
            scrollToTopSmooth() +
            console.log(information)
        )
        .catch((error) => console.error(error));
    }
  }, [foodId]);

  // TODO Suspense
  return (
    <div className={styles.infoCard}>
      {isLoading ? null : (
        <>
          <FoodDetailHeader
            image={information.image}
            title={information.title}
          />

          <FoodDetailExtra info={information} />

          <FoodDetailIngredients
            ingredients={information.extendedIngredients}
          />

          <FoodDetailInstructions
            key={information?.analyzedInstructions[0].steps.number}
            instructions={information?.analyzedInstructions[0].steps}
          />
        </>
      )}
    </div>
  );
}
