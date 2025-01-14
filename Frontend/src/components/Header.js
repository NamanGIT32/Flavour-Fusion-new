import { useState, useEffect } from "react";
import Logo from "../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import { BiSolidUser } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { DrawerExample } from "../constants";
import api from "../../axios";

export const title = (
  <a href="/">
    <img className="h-28" alt="logo" src={Logo} />
  </a>
);

export const Header = () => {
  const isOnline = useOnline();
  const navigate = useNavigate();
  const [items, setItems] = useState(0);
  const CartItems = useSelector((store) => store.cart.items); //used to subscribe to the Store.
  // console.log(CartItems);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("jwtToken");
  const fetchCart = async () => {
    try {
      const res = await api.get("/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      console.log(data);
      setItems(data.cart.items.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="flex justify-between px-3 overflow-hidden shadow-[rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.06)_0px_1px_2px_0px] fixed top-0 w-full z-50 bg-white">
      <div className="flex gap-4 items-center ">
        {title}
        <div
          style={{
            animation: "Flash 1.5s linear infinite",
          }}
        >
          {" "}
          {isOnline ? (
            <div className="text-xl text-green-400">✅Online</div>
          ) : (
            <div className="text-xl text-red-400">❌offline</div>
          )}
        </div>
      </div>

      {/* ✅, login and logout button  */}
      <div className="flex items-center gap-4 py-8">
        <div>
          <Link to={"/cart"} className="flex items-center">
            <BsFillCartFill className="text-[#3cab3c] text-4xl relative" />
            {items}
            {console.log(items)}
          </Link>
        </div>

        {localStorage.getItem("name") ? (
          <div
            onClick={handleLogout}
            className="flex items-center text-xl font-semibold border-2 px-3 py-1 border-black rounded-lg cursor-pointer"
          >
            <BiSolidUser />
            Logout
          </div>
        ) : (
          <div>
            <Link
              to={"/login"}
              className="flex items-center text-xl font-semibold border-2 px-3 py-1 border-black rounded-lg cursor-pointer"
            >
              <BiSolidUser className="" />
              Login
            </Link>
          </div>
        )}

        <DrawerExample />
      </div>
    </div>
  );
};
export default Header;
