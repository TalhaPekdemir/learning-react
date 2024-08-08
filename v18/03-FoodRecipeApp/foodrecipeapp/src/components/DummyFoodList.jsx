import { useState } from "react";
import styles from "./dummyfoodlist.module.css";

export default function DummyFoodList() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Lorem ipsum",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet etrum cart curt",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg",
    },
    {
      id: 3,
      title: "Lorem ipsum",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg",
    },
    {
      id: 4,
      title: "Lorem ipsum",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg",
    },
  ]);

  return (
    <div className={styles.itemContainer}>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <img className={styles.itemImage} src={item.image} alt={item.title} />

          <h1 className={styles.itemTitle}>{item.title}</h1>

          <button className={styles.itemButton}>Show Recipe</button>
        </div>
      ))}
    </div>
  );
}
