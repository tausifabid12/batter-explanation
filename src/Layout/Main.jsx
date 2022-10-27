import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="fixed bottom-0 right-0 ">
        <label
          for="Toggle4"
          className="inline-flex items-center p-[1.5px] rounded-md cursor-pointer  text-gray-800 border-1"
        >
          <input id="Toggle4" type="checkbox" className="hidden peer" />
          <span className="px-3 py-1  bg-[#aa076b] peer-checked:bg-gray-500 text-white rounded-l-md">
            Light
          </span>
          <span className="px-3 py-1 text-white bg-gray-400  peer-checked:bg-gray-900 rounded-r-md">
            Dark
          </span>
        </label>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
