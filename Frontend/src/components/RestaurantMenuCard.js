import React, { useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addItem, RemoveItem } from "../utils/Redux/CartSlice";
import api from "../../axios";
import { handleError, handleSuccess } from "../utils/utils";
import { ToastContainer } from "react-toastify";

const RestaurantMenuCard = ({
  name,
  description,
  imageId,
  defaultPrice,
  id,
}) => {
  const price = defaultPrice ? defaultPrice / 100 : 150;
  const dispatch = useDispatch();

  const handleAddItem = (info) => {
    dispatch(addItem(info));
  };
  const token = localStorage.getItem("jwtToken"); // Include token in request headers
  const addToCart = async (id, name, image, description, price) => {
    try {
      const res = await api.post(
        "/cart/add",
        {
          foodItemId:id,
          name:name,
          image:image,
          description:description,
          price:price
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(res.data);
      handleSuccess(res.data.message);
    } catch (error) {
        console.log(error.response);
        handleError(error.response.data.message);
    }
  };
  const removeItem = async (_id) => {
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
      handleSuccess(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-5 flex justify-between items-center h-44 w-full relative border-b border-gray-300">
      <div className="w-[75%]">
        <h1 className="font-bold text-lg">{name}</h1>
        <h1 className="text-base my-1">{"₹"+price}</h1>
        <h1 className="text-[13px]">{description}</h1>
      </div>
      <div className="h-24 w-32 relative border-2 items-center">
        <img
          className="h-full w-full rounded-lg"
          src={IMG_CDN_URL + imageId}
          alt=""
        />
        <Button
          className="absolute bottom-[25%] left-[25%]"
          colorScheme="green"
          onClick={() => addToCart(id, name, IMG_CDN_URL+imageId, description, price)}
          // onClick={() => (handleAddItem({name,imageId,defaultPrice,id}))}
        >
          Add
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};
export default RestaurantMenuCard;
