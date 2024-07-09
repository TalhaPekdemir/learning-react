import ProductShowcase from "./ProductShowcase";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "LEGO Speed Champions Ferrari F40 Competizione",
      price: 25,
      stock: 3,
    },
    {
      id: 2,
      name: "LEGO Speed Champions Lamborghini Countach",
      price: 30,
      stock: 15,
    },
    {
      id: 3,
      name: "LEGO Speed Champions McLaren Senna",
      price: 35,
      stock: 1,
    },
    {
      id: 4,
      name: "LEGO Speed Champions 1974 Porsche 911 Turbo 3.0",
      price: 25,
      stock: 0,
    },
  ];

  return (
    <div>
      Inventory:
      <ul>
        {products.map((product) => (
          <ProductShowcase key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
