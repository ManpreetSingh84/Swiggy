import React, { useEffect, useState } from "react";
import DishScroll from "./DishScroll";
import TopRestaurant from "./TopRestaurant";
import Onlinefooddelivery from "./Onlinefooddelivery";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <>
    <div className="w-[85%] m-auto">
      <DishScroll />
      <TopRestaurant />
      <Onlinefooddelivery />
    </div>
    </>
  );
}

export default Body;
