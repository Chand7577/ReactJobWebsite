import React from "react";
import { useState } from "react";
const Button = ({ job }) => {
  const [show, setShow] = useState(false);
  // const showDesc=()=>{
  //         pas
  // }
  return (
    <div class="flex flex-col lg:flex-row justify-between mb-4">
      <div class="text-orange-700 mb-3">
        <i class="fa-solid fa-location-dot text-lg"></i>
        {job.location.slice[(0, 10)]}
      </div>
      <a
        href="job.html"
        class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
      >
        Read More
      </a>
    </div>
  );
};

export default Button;
