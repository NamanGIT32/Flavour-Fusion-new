import { IMG_CDN_URL } from "../constants";
import { Button } from '@chakra-ui/react'
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Redux/CartSlice";

const RestaurantMenuCard = ({
    name,
    description,
    imageId,
    defaultPrice,
    id,
}) => {
    const dispatch = useDispatch();

    const handleAddItem = (info) => {
        dispatch(addItem(info));
    };

    return (
        <div className="mt-5 flex justify-between items-center h-44 w-full relative border-b border-gray-300">
            <div className="w-[75%]">
                <h1 className="font-bold text-lg">{name}</h1>
                <h1 className="text-base my-1">{"₹" + defaultPrice/100}</h1> 
                <h1 className="text-[13px]">{description}</h1>
            </div>
            <div className="h-24 w-32 relative border-2 items-center">
              <img className="h-full w-full rounded-lg" src={IMG_CDN_URL + imageId} alt="" />
              <Button className="absolute bottom-[25%] left-[25%]" colorScheme='green'
                onClick={() => (handleAddItem({name,imageId,defaultPrice,id}))}
              >Add</Button>
            </div>  

        </div>
    )
};
export default RestaurantMenuCard;