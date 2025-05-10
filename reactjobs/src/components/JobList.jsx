import React from "react";
import Button from "./Button";
import { useState } from "react";
import { FaMapMarked } from "react-icons/fa";
import { Link } from "react-router-dom";
const JobList = ({ job }) => {
  const [show, setShow] = useState(false);
  const showDesc = () => {
    setShow(!show);
  };
  return (
    <div class="bg-white rounded-xl shadow-md relative">
      <div class="p-4">
        <div class="mb-6">
          <div class="text-gray-600 my-2">{job.type}</div>
          <h3 class="text-xl font-bold">{job.title}</h3>
        </div>

        <div class="mb-5">
          {show ? job.description : job.description.substring(0, 29)} ...
        </div>

        <h3 class="text-indigo-500 mb-2">{job.salary}/ Year</h3>

        <div class="border border-gray-100 mb-5"></div>
        <div class="flex flex-col lg:flex-row justify-between mb-4">
          <div class="text-orange-700 mb-3">
            <FaMapMarked className="inline text-lg mb-1 mr-1" />
            {job.location}
          </div>

          <Link
            to={`/jobs/${job.id}`}
            class="h-[36px] bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
          <button onClick={showDesc}>{show ? " Less" : "More"}</button>
        </div>
      </div>
    </div>
  );
};

export default JobList;
