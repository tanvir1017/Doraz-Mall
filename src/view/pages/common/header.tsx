import cart from "../../../assets/icons/cart.png";
import search from "../../../assets/icons/Search.png";
import coupon from "../../../assets/images/Coupon.png";
import logo from "../../../assets/images/Logo.png";

const Header = () => {
  return (
    <div className="px-8 py-3 mx-auto flex items-center justify-evenly">
      <div>
        <img className="w-40" src={logo} alt="brand-logo-images" />
      </div>
      <div className="flex">
        <input
          placeholder="Search in Doraz"
          className="text-slate-800 bg-slate-100 w-80 px-6 py-3 focus:outline-none "
          type="text"
        />
        <button className="bg-orange-500 text-white px-4 py-3">
          <img className="w-6" src={search} alt="search icons" />
        </button>
        <div className="px-6 py-3  ml-4 ">
          <img className="w-8" src={cart} alt="product cart icons" />
        </div>
      </div>
      <div>
        <img className="w-48" src={coupon} alt="coupon pictures" />
      </div>
    </div>
  );
};

export default Header;
