import BasketItem from "./BasketItem";

export default function Basket() {
  const basketItems = [
    { id: 1, name: "LEGO Speed Champions Ferrari F40 Competizione", price: 25 },
    { id: 2, name: "LEGO Speed Champions Lamborghini Countach", price: 30 },
    { id: 3, name: "LEGO Speed Champions McLaren Senna", price: 35 },
  ];

  return (
    <div>
      Basket:
      <ul>
        {basketItems.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
