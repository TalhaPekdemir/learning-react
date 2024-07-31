import { useEffect, useState, useRef } from "react";
import { RECIPES_URL } from "../../utils/consts/spoonacularapi-endpoints";

import styles from "./search.module.css";

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState(""); // to store input field value
  const [debouncedQuery, setDebouncedQuery] = useState(""); // to store full query after delay
  const [isFirstRender, setIsFirstRender] = useState(true); // to check if page's first render
  const typingTimeoutId = useRef(null); // to store timeout reference

  useEffect(() => {
    // to block useEffect from making API calls on initial render.
    // notice it will not log to console <empty string> (firefox) or "".
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    // do api stuff
    const searchRecipes = () => {
      fetch(`${RECIPES_URL}/complexSearch?query=${debouncedQuery}`, {
        method: "GET",
        headers: { "x-api-key": import.meta.env.VITE_SPOONACULAR_API_KEY },
      })
        .then((res) => res.json())
        .then((data) => setFoodData(data))
        .catch((error) => console.error(error));
    };

    searchRecipes();
  }, [debouncedQuery]);

  const handleInputChange = (e) => {
    // maybe for sanitization purposes later
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (typingTimeoutId.current) {
      clearTimeout(typingTimeoutId.current);
    }

    // set a new state after keys are no longer pressed.
    // watch it with useEffect and change in that state will trigger the api call
    typingTimeoutId.current = setTimeout(
      // dont forget the arrow function or it will execute immediately
      // () => setDebouncedQuery(newQuery)

      // or just pass the method reference
      setDebouncedQuery,
      1500,

      // and after pass the arguments to the setTimeout
      newQuery
    );
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        onChange={handleInputChange}
        type="text"
        placeholder="What do you wanna cook?"
      />
    </div>
  );
}
