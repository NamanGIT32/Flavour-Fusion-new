import { useContext, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import UsersContext from "../utils/UserContext";
import {Link} from "react-router-dom";

import { FcLike,FcLikePlaceholder } from "react-icons/fc";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  restaurant
}) => {
  // const {name, cuisines, avgRating, cloudinaryImageId} = restaurant.info;
  const {user} = useContext(UsersContext);
  const [favourate, setFavourate] = useState(false);
  return (
    <div className="w-60 rounded-xl relative">
      <div className="overflow-hidden rounded-xl">
        <Link to={"/restaurant/" + restaurant.info.id}>
          <img
            className="h-44 w-full object-cover rounded-xl transition-all ease-linear duration-200 hover:scale-110 shadow-[rgba(0,0,0,0.07)_0px_1px_2px,rgba(0,0,0,0.07)_0px_2px_4px,rgba(0,0,0,0.07)_0px_4px_8px,rgba(0,0,0,0.07)_0px_8px_16px,rgba(0,0,0,0.07)_0px_16px_32px,rgba(0,0,0,0.07)_0px_32px_64px]"
            src={IMG_CDN_URL + cloudinaryImageId}
          />
        </Link> 
      </div>
      {!favourate ? <FcLikePlaceholder onClick={()=>{setFavourate(true)}} className="absolute top-0 right-0 text-3xl"/> : <FcLike onClick={()=>{setFavourate(false)}} className="absolute top-0 right-0 text-3xl"/>}
      <div className="p-2">
      <h2 className="text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </h2>
      <h3 className="whitespace-nowrap overflow-hidden text-ellipsis">
        {cuisines.join(", ")}
      </h3>
      <div className="flex items-center gap-1">
        <img
          className="h-5"
          src="https://purepng.com/public/uploads/large/purepng.com-green-starstargeometricallydecagonconcavestardomclipartgreen-1421526503700o6cix.png"
          alt=""
        />
        {avgRating}
      </div>
      </div>
      
    </div>
  );
};
export default RestaurantCard;
