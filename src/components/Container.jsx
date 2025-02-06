import React from "react";
import { Outlet } from "react-router-dom";
import Filter from "./Filter.jsx";
function Container() {
  return (
    <div className=" flex lg:flex-row flex-col   w-full  h-[90.7vh]  ">
      <div className=" lg:w-[15%] w-full h-1/10 lg:h-full bg-[#F5F5F5] p-3 ">
        <Filter />
      </div>
      <div className=" lg:w-[85%]  w-full scroller lg:h-full overflow-y-scroll h-9/10 py-2 lg:py-5  ">
        <Outlet />
      </div>
    </div>
  );
}

export default Container;
