import React from "react";
import JobLists from "../components/JobLists";
const JobsPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-6">
      <JobLists isHome={true} />
    </section>
  );
};

export default JobsPage;
