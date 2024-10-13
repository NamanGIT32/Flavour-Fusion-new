import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import {filterData} from "../utils/helper"
import useOnline from "../utils/useOnline";
import { jsondata } from "../Restaurant_list";

const Body= () => {
    const [allRestaurants, setAllRestaurants]= useState([]);
    const [filteredRestaurants, setFilteredRestaurants]= useState([]);
    const [searchText,setSearchText]= useState("");
    
    useEffect(()=>{
        getRestaurants(); 
    },[])

    async function getRestaurants(){
        // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=jsondata;
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const isOnline = useOnline();    //created a useOnline custom hook which returns true or false
    if(!isOnline){
        return <h1>🔴 You are offline, Plz check your internet connection</h1>
    }   

    if(!allRestaurants) return null;
    
    return (allRestaurants.length===0)? <Shimmer/> :(
        <>
            <div className="h-[90vh] w-[80vw] m-auto rounded-md my-6 shadow-[rgba(0,0,0,0.07)_0px_1px_2px,rgba(0,0,0,0.07)_0px_2px_4px,rgba(0,0,0,0.07)_0px_4px_8px,rgba(0,0,0,0.07)_0px_8px_16px,rgba(0,0,0,0.07)_0px_16px_32px,rgba(0,0,0,0.07)_0px_32px_64px]">
                <div className="overflow-hidden h-[100%] w-[100%] flex">
                    <img className="h-full min-w-[100%]" style={{animation:'slide 20s linear infinite'}} src="https://images.unsplash.com/photo-1563683640683-74f1723873d0?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                    <img className="h-full min-w-[100%]" style={{animation:'slide 20s linear infinite'}} src="https://images.unsplash.com/photo-1643341936218-fc5399005f0c?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                    <img className="h-full min-w-[100%]" style={{animation:'slide 20s linear infinite'}} src="https://images.unsplash.com/photo-1550389636-ad25afa7ab44?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
            <div className="mt-2 mb-5 flex items-center justify-center gap-3 ">
                <input
                    type="text"
                    className="border border-l-4 border-r-4 border-slate-400 rounded-xl w-2/5 p-1 px-3 text-base h-10 font-serif focus: outline-none mt-10 mb-5"
                    placeholder="ex: The Filter Coffee"
                    value={searchText}
                    onChange={(e)=>{
                        return setSearchText(e.target.value);
                    }}
                />
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{
                    const data=filterData(searchText,allRestaurants);
                    return setFilteredRestaurants(data);
                }}>Search</button>
            </div>   
            
            <div className="flex flex-wrap gap-10 justify-center mx-2 mb-20">
                {
                    (filteredRestaurants.length===0)? <h1>No restaurants found...!!</h1> : filteredRestaurants.map((Restaurant)=>{
                        return  <RestaurantCard key={Restaurant.info.id} restaurant={Restaurant} {...Restaurant.info} />
                    }) 
                }
            </div>
        </>
    );
};
export default Body; 