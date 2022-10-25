import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import CourseCard from "./CourseCard";

const AllCourses = () => {
  // store swiper instances

  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCourseData(data));
  }, []);

  console.log(courseData);
  return (
    <div className="min-h-screen grid sm:grid-cols-2 md:grid-cols-3 gap-y-10  mx-3 ">
      {courseData.map((cd) => (
        <CourseCard key={cd.cat_id} courseData={cd} />
      ))}
    </div>
  );
};

export default AllCourses;
