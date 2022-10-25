import React from "react";
import AllCourses from "../components/AllCourses";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="my-16">
        <h1 className="text-gray-900 sm:text-xl md:text-5xl font-semibold pb-10 md:pl-12">
          Our Popular Courses
        </h1>
        <AllCourses />
      </div>
    </div>
  );
};

export default Home;
