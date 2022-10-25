import React from "react";
import Login from "../components/Login";

const LogInPage = () => {
  return (
    <div className="">
      <div className="sm:w-[90%] md:w-1/3 mx-auto mt-10 rounded-lg  flex items-center justify-center flex-col md:shadow-lg md:shadow-[#aa076b] ">
        <h4 className=" text-[#aa076b] font-bold text-5xl mb-5 mt-7">
          {" "}
          Log in
        </h4>
        <div className=" ">
          <Login></Login>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
