import { ProductCard } from "../common/productCard";

export const ProductArray = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
};
