import React from "react";
import { Link } from "react-router-dom";

function RestaurantCard({ item }) {
  return (
    <Link to={`/restaurantMenu/${item.info.id}`}>
      {/* img div  */}
      <div className="min-w-[273px] max-w-[273px] group-hover:shadow-xl group-hover:scale-105 duration-300 hover:shadow-gray-400 min-h-[182px] max-h-[182px] relative  overflow-hidden rounded-3xl">
        <img
          // key={index}
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.info?.cloudinaryImageId}`}
          className="w-full transition-shadow h-52 rounded-3xl  object-cover shadow-md  shadow-zinc-400  ease-linear duration-300 "
          alt=""
        />
        <div className="w-full h-full absolute top-0 bg-gradient-to-t to-80% from-zinc-700 from-5%"></div>
        <div className="text-white text-xl font-semibold absolute bottom-3 left-4">
          <span className="mr-2 tracking-wide"> {item.info.aggregatedDiscountInfoV3?.header
            ? item.info.aggregatedDiscountInfoV3?.header
            : " "}</span>
          <span className="tracking-wider">{item.info.aggregatedDiscountInfoV3?.subHeader
            ? item.info.aggregatedDiscountInfoV3?.subHeader
            : ""}</span>
          {/* {item.info.aggregatedDiscountInfoV3?.header +
            " " +
            item.info.aggregatedDiscountInfoV3?.subHeader} */}
        </div>
        {/* img div ends  */}
      </div>
      <div
        id="lowerSection"
        className="px-1 bg-white duration-300 py-1 min-w-[273px] max-w-[273px] h-[160px] "
      >
        <h1 className="font-bold text-lg mb-1 text-left tracking-wider line-clamp-1">
          {item?.info?.name}
        </h1>
        <h3 className="text-sm font-semibold">
          <div className="flex gap items-center">
            <div className="animate-spin  w-5 mr-2 ">
              <i className="ri-gemini-fill animate-pulse text-green-600 text-xl  inline-block mr-2"></i>
            </div>{" "}
            <span> {item?.info?.avgRatingString} : {item?.info?.sla?.slaString}</span>
          </div>
        </h3>
        <div className="mt-2  flex-wrap flex justify-start items-center gap-1 line-clamp-1">
          <span className="text-nowrap font-semibold  text-zinc-500 ">
            {item?.info?.cuisines[0]}
          </span>
          <span className="ml-3  font-semibold text-zinc-500  text-nowrap">
            {item?.info?.cuisines[1]}
          </span>
        </div>
        <h1 className="font-semibold mt-2 text-zinc-500">
          <i className="ri-map-pin-line"></i> {item?.info?.locality}
        </h1>
      </div>
      {/* imgends */}
    </Link>
  );
}

export default RestaurantCard;
