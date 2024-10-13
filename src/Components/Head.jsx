import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Head() {
  return (
    <>
      <div className="w-full">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default Head;
