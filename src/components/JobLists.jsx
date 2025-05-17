import React, { useState, useEffect, use } from "react";
import jobs from "../jobs.json";
import JobList from "./JobList";

const JobLists = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = !isHome
        ? "https://json-server-wiov.onrender.com//jobs?_limit=3"
        : "https://json-server-wiov.onrender.com//jobs";
      const res = await fetch(apiUrl);
      const data = await res.json();
      setJobs(data);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  return (
    <section class="bg-blue-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {!isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <h2>LOADING...</h2>
          ) : (
            <>
              {jobs.map((job) => {
                return <JobList key={job.id} job={job} />;
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobLists;
