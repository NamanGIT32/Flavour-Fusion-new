import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurants";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { FcShipped } from "react-icons/fc";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenu = () => {
  const resID = useParams();
  // useParams returns an object that's why we use de-structuring.
  const { id } = resID;

  const restaurantHook = useRestaurant(id);
  //Destructuring our Custom hook
  const { restaurant, restaurantData } = restaurantHook;

  const [favourate, setFavourate] = useState(false);

  {console.log(restaurant)}
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex justify-center items-center ">
      <div className="flex-col w-[800] mt-5 relative" >
        <div>
          <div className="flex justify-between">
            <h1 className="text-xl font-bold tracking-wide">
              {restaurant.name}{" "}
            </h1>
            <div className="flex items-center gap-2 text-lg">
            {!favourate ? <FcLikePlaceholder onClick={()=>{setFavourate(true)}} className="text-2xl"/> : <FcLike onClick={()=>{setFavourate(false)}} className=" text-2xl"/>}
              <div className="flex items-center gap-1 border-2 rounded-md px-2">
                <FaStar className="text-green-500" />
                <h3 className="text-green-500">{restaurant.avgRating}</h3>
              </div>
            </div>
          </div>
          <h1 className="text-sm mt-2"> {restaurant.cuisines.join(", ")} </h1>
          <h1 className="text-sm">
            {restaurant?.locality} {", "} {restaurant?.areaName}
          </h1>
          <div className="border-2 border-dashed mt-5"></div>
          <div className="flex gap-4 mt-3 flex-wrap">
            <h1 className="flex items-center gap-2 font-bold text-lg ">
              <IoTimerSharp /> {restaurant?.sla?.slaString}
            </h1>
            <h1 className="flex  items-center gap-2 font-bold text-lg ">
              <HiOutlineCurrencyRupee /> {restaurant?.costForTwoMessage}
            </h1>
          </div>
          <span className="flex items-center gap-2 font-bold text-lg mt-1">
            <FcShipped /> <h1 className="text-green-700">Free Delivery</h1>
          </span>
        </div>


        {restaurantData.map((temp1, index) => (
          <>
            {temp1?.card?.card?.title ? <h1 key={temp1?.card?.card?.title} className="text-2xl font-bold mt-10 border-t-8 border-gray-300 pt-8">{temp1?.card?.card?.title} ({temp1?.card?.card?.itemCards?.length})</h1>:null}
            
            <div>
              {temp1?.card?.card?.itemCards?.map((temp2) => (
                <RestaurantMenuCard key={temp2?.card?.info?.id} {...temp2?.card?.info} />
                ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
