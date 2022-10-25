import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ courseData }) => {
  const { cat_name, thum, cat_id } = courseData;
  return (
    <div className="min-w-[100%] lg:min-w-[90%]  mx-auto rounded-md shadow-xl bg-white text-gray-900">
      <img
        src={thum}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{cat_name}</h2>
          <p className="">Enroll to learn with batter explanation</p>
        </div>
        <Link
          to={`/courses/${cat_id}`}
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#aa076b] text-white"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
