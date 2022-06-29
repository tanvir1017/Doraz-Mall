import { ProductCard } from "../../components/common/productCard";
import { Dslider } from "../../components/coustome/dslider";

export const Home = () => {
  return (
    <div>
      <div className="py-20">
        <Dslider />
      </div>
      <div>
        <ProductCard />
      </div>
    </div>
  );
};
