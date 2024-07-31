import FoodItem from "./FoodItem";

export default function FoodList({ foodList }) {
  return (
    <div>
      {foodList?.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}
