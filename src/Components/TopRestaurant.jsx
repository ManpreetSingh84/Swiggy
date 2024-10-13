import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Outlet } from "react-router-dom";

function TopRestaurant() {
  let [title, setTitle] = useState("Order Your Fav Food");
  let [getImg, setGetImg] = useState([]);
  async function fetchDataFromApi() {
  try {
    let api = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.660882&lng=77.160885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let convertJson = await api.json();
    console.log(convertJson); // Log the response data to the console
    setGetImg(
      convertJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setTitle(convertJson?.data?.cards[1]?.card?.card?.header?.title);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
  useEffect(() => {
    fetchDataFromApi();
  }, []);
  let [scroller, setScroller] = useState(0);
  return (
    <div className="w-full h-full">
      {/* #upperSection  */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mt-7 mb-1">{title}</h1>
        <div
          id="buttonSectionPreNext"
          className="flex justify-between items-center gap-3"
        >
          <button
            onClick={() => {
              setScroller((prev) => {
                console.log(prev);
                return prev > 0 ? prev - 250 : 0;
                // return prev - 40;
              });
            }}
            className={`button animate-bounce  rounded-full py-1 ${
              scroller === 0 ? "bg-slate-200" : "bg-slate-400"
            } text-white px-2`}
          >
            <i className="ri-arrow-left-line"></i>
          </button>
          <button
            onClick={(e) => {
              setScroller((prev) => {
                console.log(prev);
                return prev <= 1600 ? prev + 250 : prev;
                // prev + 40;
              });
            }}
            className={`button animate-bounce rounded-full py-1 ${
              scroller === 160 ? "bg-slate-200" : "bg-slate-400"
            } text-white px-2`}
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
      {/* #upperSection  ends  */}

      {/* #LowerSection  */}
      <div
        className={`flex gap-2  h-full items-center mt-2 overflow-auto scroller border-b-2 border-gray-200`}
      >
        {getImg.map((item, index) => (
          <div
            key={index}
            className="min-w-[305px] group  min-h-[384px] cursor-pointer border-black gap-3 flex overflow-hidden flex-col items-center p-4   justify-items-stretch duration-500 group"
            style={{ transform: `translateX(-${scroller}%)` }}
          >
            {item.info && <RestaurantCard item={item}></RestaurantCard>}
          </div>
        ))}
      </div>
      {/* #LowerSection ends */}
    </div>
  );
}

export default TopRestaurant;
