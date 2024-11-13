import { GoTrash } from "react-icons/go";
import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { RemoveItem } from "../utils/Redux/CartSlice";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci"
import api from "../../axios";

const CartItemsCard = ({ name, image, price, _id, description, fetchCart, itemId, quantity }) => {
  // const dispatch = useDispatch();
  // const handleRemoveItem = (id) => {
  //   dispatch(RemoveItem(id));
  //   console.log(id)
  // }
  const token = localStorage.getItem("jwtToken");
  const RemoveItem = async (_id) => {
    try {
      const res = await api.post(
        "/cart/delete/",
        {
          _id: _id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };
  const increaseQuantity = async (itemId) => {
    try {
      const res= await api.post('/cart/add',
      {
        foodItemId:itemId
      },
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );
    const data = res.data;
    console.log(data);
    fetchCart();
    } catch (error) {
      console.log(error);
    }
  };
  const decreaseQuantity = async (itemId) => {
    try {
      const res= await api.post('/cart/decreasequantity',
      {
        _id: itemId
      },
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );
    const data = res.data;
    console.log(data);
    fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full mt-2 border border-solid border-slate-300 p-1 px-2 rounded-md">
      <div className="flex items-center justify-between gap-3">
        <img
          className="h-24 w-24 object-cover rounded-full shadow-md shrink-0"
          src={image}
        />
        <div className="flex items-center gap-12">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold whitespace-normal text-slate-600">
              {name}
            </h2>
            <h3 className="text-right text-lg">{"₹" + quantity*price}</h3>
          </div>
          <GoTrash
            className="text-2xl text-red-500"
            onClick={() => RemoveItem(_id)}
          />
          {/* <GoTrash className="text-2xl text-red-500" onClick={()=>handleRemoveItem({_id})}/> */}
        </div>
      </div>
      <div className="flex items-center text-3xl  mt-4">
        <div className="cursor-pointer"
        onClick={()=> increaseQuantity(itemId)}
        ><CiSquarePlus /></div>
        <div className="text-slate-600 text-2xl w-12 text-center">{quantity}</div>
        <div className="cursor-pointer"
        onClick={()=> decreaseQuantity(itemId)}
        ><CiSquareMinus /></div>
      </div>
      <div className="mt-4 text-slate-600 text-lg">{description}</div>
    </div>
  );
};
export default CartItemsCard;
