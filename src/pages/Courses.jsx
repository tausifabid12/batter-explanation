import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCourses from "../components/AllCourses";
import SideNav from "../components/SideNav";

const Courses = () => {
  const data = useLoaderData();
  return (
    <div className=" ">
      <div className="p-12 flex justify-between">
        <h1 className="sm:text-2xl md:text-5xl text-gray-900 ">All Courses</h1>
        <div>
          <input
            type="text"
            className="rounded-xl pl-3 focus:border-2 outline-none focus:border-[#aa076b]"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex ">
        <div className="w-[80%]">
          <AllCourses />
        </div>
        <div className="w-[20%] shadow-2xl h-screen rounded-xl px-10 border-2 border-gray-100 py-10">
          <SideNav data={data} />
        </div>
      </div>
    </div>
  );
};

export default Courses;
