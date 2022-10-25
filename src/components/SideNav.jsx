import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ data }) => {
  console.log(data);
  return (
    <div className=" ">
      <h4 className="text-center sm:text-xl md:text-2xl font-bold text-gray-900">
        Categories
      </h4>
      <div className="pt-10">
        {data.map((d) => (
          <ul>
            <li className="text-center font-semibold text-gray-900 sm:text-lg ms:text-xl pb-4 hover:text-[#aa076b]">
              <Link to={`/courses/${d.cat_id}`} key={d.cat_id}>
                {d.cat_name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
