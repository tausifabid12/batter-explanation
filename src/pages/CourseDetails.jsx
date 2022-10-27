import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaClock, FaLeanpub, FaInstalod, FaFilePdf } from "react-icons/fa";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CourseDetails = () => {
  const { thum, cat_name, dec } = useLoaderData();
  return (
    <div
      ref={ref}
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2 mb-5">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              The Best {cat_name} Course from the
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-[#aa076b]">
                  Batter Explanation
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">{dec}</p>
          </div>
          <p className="mb-4 text-sm font-bold tracking-widest uppercase">
            Features
          </p>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-1">
                  <FaClock></FaClock>
                </span>
                20 Weeks
              </li>
              <li className="flex items-center">
                <span className="mr-1">
                  <FaLeanpub></FaLeanpub>
                </span>
                30 Lessions
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-1">
                  <FaInstalod></FaInstalod>
                </span>
                100 Quiz
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Easy to hard lavel
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={thum}
            alt=""
          />
        </div>
      </div>
      <Link
        to="/checkOut"
        className=" px-8 py-3 font-semibold rounded bg-[#aa076b] text-white"
      >
        Enroll Now
      </Link>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            className="ml-4 px-8 py-3 font-semibold rounded bg-[#aa076b] text-white "
          >
            Download Info
            <span>
              <FaFilePdf className=" ml-1 inline" />
            </span>
          </button>
        )}
      </Pdf>
    </div>

    // <div className="p-5 mx-auto sm:p-10 md:p-5   text-gray-100">
    //   <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
    //     <img src={thum} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
    //     <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-[#aa076b]">
    //       <div className="space-y-2">
    //         <Link
    //           rel="noopener noreferrer"
    //           href="#"
    //           className="inline-block text-2xl font-semibold sm:text-3xl"
    //         >
    //           The Best {cat_name} Course from the Batter Explanation
    //         </Link>
    //         <p className="text-xs text-gray-400">
    //           By
    //           <Link
    //             rel="noopener noreferrer"
    //             href="#"
    //             className="text-xs hover:underline"
    //           >
    //             Leroy Jenkins
    //           </Link>
    //         </p>
    //       </div>
    //       <div className="text-gray-100">
    //         <p>{dec}</p>
    //       </div>
    //     </div>
    //     <Link className="block mx-auto  px-8 py-3 font-semibold rounded bg-[#aa076b] text-white">
    //       Enroll Now
    //     </Link>
    //   </div>
    // </div>
  );
};

export default CourseDetails;
