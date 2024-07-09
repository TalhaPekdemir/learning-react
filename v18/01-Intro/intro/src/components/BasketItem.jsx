export default function BasketItem({ item }) {
  return (
    <li>
      {item.name} ${item.price}{" "}
      {item.stock > 5 ? "[Left less than 5! Order swift!]" : ""}{" "}
      {item.stock == 0 ? "[SOLD OUT]" : ""}
    </li>
  );
}
