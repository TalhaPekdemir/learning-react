export default function BasketItem({ item }) {
  return (
    <li>
      {item.name} ${item.price}
    </li>
  );
}
