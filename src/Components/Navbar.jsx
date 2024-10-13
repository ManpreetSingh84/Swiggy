import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="w-full fixed top-0 z-10 mb-10 shadow-sm shadow-gray-300 bg-white flex justify-between items-center">
        <div
          id="logo-section Navbar"
          className="w-[85%] mx-auto min-h-[10vh] flex justify-between items-center"
        >
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <div
                id="logoImg"
                className="w-20 flex justify-center items-center"
              >
                <img
                  src="https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ=w240-h480-rw"
                  className="w-12 rounded-2xl  duration-300 transition-all hover:w-14"
                  alt="Swiggy logo"
                />
              </div>
            </Link>
            <div id="others-arrow" className="ml-2">
              <strong className="border-b-2 border-black hover:border-orange-500 font-bold text-xs pb-1 hover:text-orange-600">
                Others
              </strong>
              <i className=" text-orange-500 font-semibold ri-arrow-down-s-line"></i>
            </div>
          </div>
          <div
            id="navbarRight"
            className="flex justify-between items-center gap-10"
          >
            {[
              {
                icon: <i className="ri-briefcase-3-line"></i>,
                title: "Swiggy Corporate",
              },
              { icon: <i className="ri-search-line"></i>, title: "Search" },
              {
                icon: <i className="ri-discount-percent-line"></i>,
                title: "Offers",
                new: true,
              },
              { icon: <i className="ri-question-line"></i>, title: "Help" },
              { icon: <i className="ri-user-line"></i>, title: "Sign In" },
              {
                icon: <i className="ri-shopping-cart-2-line"></i>,
                title: "Cart",
              },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center cursor-pointer gap-2 font-semibold hover:text-orange-600 text-zinc-600"
                >
                  {item.icon}
                  <span className="cursor-pointer text-nowrap inline-block relative">
                    {item.title}{" "}
                    {item.new ? (
                      <span className="text-orange-600 animate-pulse   text-sm absolute -top-[0] -right-[90%] -translate-x-[50%] -translate-y-[50%]">
                        New{" "}
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
