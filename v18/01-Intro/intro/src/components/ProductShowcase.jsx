export default function ProductShowcase({ product }) {
  return (
    <li>
      {product.name} ${product.price} {product.stock == 0 ? "SOLD OUT" : ""}
    </li>
  );
}
