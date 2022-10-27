import React from "react";
import heroImg from "../assets/hero.jpg";
import Login from "./Login";

const Hero = () => {
  return (
    <section className="text-white ">
      <div className="container-lg w-full  flex flex-col justify-center  mx-auto  lg:flex-row lg:justify-between">
        <div className="sm:w-full md:w-1/2 min-h-[50vh] md:h-screen  bg-gradient-to-r from-[#61045f] to-[#aa076b] flex flex-col justify-center px-8 md:pt-24 text-center rounded-sm  lg:text-left">
          <h1 className="text-3xl text-center font-bold leading-none sm:text-6xl">
            Welcome to
            <span className="">Batter Explanation</span>
          </h1>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <div className="hidden md:flex  w-full items-center justify-center p-6 rounded-md sm:p-10 text-gray-900">
              <Login></Login>
            </div>
          </div>
        </div>
        <div className="sm:w-full md:w-1/2 sm:h-[40vh]  md:h-screen  flex items-center justify-center ">
          <img src={heroImg} alt="" className=" min-w-full max-h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
