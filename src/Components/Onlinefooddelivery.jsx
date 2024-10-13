import React, { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";

export default function Onlinefooddelivery() {
  let [title, setTitle] = useState("Order Your Fav Food");
  let [getData, setData] = useState([]);

  async function fetchDataFromApi() {
    let api = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.660882&lng=77.160885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let convertJson = await api.json();
    // console.log(convertJson);
    setTitle(convertJson?.data?.cards[2]?.card?.card.title);
    setData(
      convertJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log(
    //   convertJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     .restaurants
    // );
  }
  useEffect(() => {
    fetchDataFromApi();
  }, []);
  return (
    <div className="w-full min-h-screen ">
      <h1 className="text-2xl font-bold mt-7 mb-1">{title}</h1>
      <div id="buttonSection" className="flex gap-4 flex-wrap"></div>

      <div className="flex justify-center gap-x-10 gap-y-2 mt-5 flex-wrap">
        {getData.map((item, index) => (
          <div className="group"  key={index}>

            <RestaurantCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
