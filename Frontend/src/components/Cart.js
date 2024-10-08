import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/Redux/CartSlice";
import {useState} from "react";
import CartItemsCard from "./CartItemsCard";
import emptyCart from "../assets/img/empty-cart.webp";
import { Button } from '@chakra-ui/react';
import {Link} from "react-router-dom";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiSwipeCard,GiCash } from "react-icons/gi";
import { BsCreditCard2Front } from "react-icons/bs";


const Cart = () => {
    const CartItems = useSelector(store => store.cart.items);
    console.log(CartItems);
    const dispatch = useDispatch();
    const Price = {
        PlatformFee:50,
        GST:10
    }
    const [visible,setVisible] = useState(false);
    return (
        <>
        {
        CartItems.length === 0? 
        <div className="h-[100vh] w-[100%] flex flex-col justify-center items-center overflow-hidden">   
            <img src={emptyCart} className="h-64"/>
            <h1 className="font-semibold text-xl text-gray-700 my-3 tracking-wide">Your cart is empty</h1>
            <Link to="/"><Button colorScheme='orange' backgroundColor="#f97316"  _hover={{ bg: '#ea580c' }} className="tracking-wide">See Restaurants Near you</Button></Link>
        </div>:
            <>
                <div className="w-full bg-slate-100 p-3 flex gap-4 ">
                    <Button colorScheme='whatsapp' onClick={()=> dispatch(clearCart())}>Clear Cart</Button>
                    <a href="#one"><Button colorScheme='orange' onClick={() => setVisible(true)}>Proceed to payment</Button></a>
                </div>
                
                <div className="w-full flex flex-col items-center justify-center" >
                    {/* main cart box */}
                    <div className="w-[75%] border-2 border-gray-600 min-h-[400px] max-h-[400px] overflow-x-hidden p-3 mt-5">
                        <div className="w-full text-3xl text-left font-semibold text-gray-600 ">Food Items-{CartItems.length}</div>
                        <div className="flex flex-col mt-4">
                            {CartItems.map((items)=>{
                                return <CartItemsCard key={items.id} {...items}/>
                            })}
                            
                        </div>
                    </div>
                    {/* billing section */}
                    <div className="w-[75%] border-2 border-gray-600 mt-2 p-3">
                        <div className="w-full">
                            <div className="flex justify-between">
                                <span>Total</span>
                                {CartItems[0].defaultPrice?<span>{(CartItems[0].defaultPrice)/100}</span>:<span>₹110</span>}
                                
                            </div>
                            <div className="flex justify-between">
                                <span>Platform Fee</span>
                                <span>₹{Price.PlatformFee}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>GST</span>
                                <span>₹{Price.GST}</span>
                            </div>
                            <div className="text-xl font-bold flex justify-between mt-3 py-3 border-t-[3px] text-gray-600">
                                <span>TO PAY</span>
                                <span>₹200</span>
                            </div>
                        </div>
                    </div>
                    {/* payment-options */}
                    {
                        visible && <div className="w-[30%] border-2 border-gray-400 mt-5 p-2" id="one">
                        <h1 className="font-bold text-2xl py-3 tracking-wide border-b-2 border-gray-400 flex items-center gap-2 text-gray-600 mb-2"><FcMoneyTransfer />Payment Options </h1>
                        <h2 className="font-semibold text-xl tracking-wide py-2 flex items-center gap-2 hover:bg-slate-200 transition-all transition-200 rounded-sm px-2"><GiSwipeCard />Debit Card</h2>
                        <h2 className="font-semibold text-xl tracking-wide py-2 flex items-center gap-2 hover:bg-slate-200 transition-all transition-200 rounded-sm px-2"><BsCreditCard2Front /> Credit Card</h2>
                        <h2 className="font-semibold text-xl tracking-wide py-2 flex items-center gap-2 hover:bg-slate-200 transition-all transition-200 rounded-sm px-2"><GiCash />Cash on delivery</h2>
                        <h2 className="font-semibold text-xl tracking-wide py-2 flex items-center gap-2 hover:bg-slate-200 transition-all transition-200 rounded-sm px-2">
                            <img className="h-5" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png"/>
                            Pay with UPI</h2>
                    </div>
                    }
                </div>
            </>    
        }
        </>
    )
};
export default Cart;