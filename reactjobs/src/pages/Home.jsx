import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobLists from "../components/JobLists";
import ViewJobs from "../components/ViewJobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeCards />
      <JobLists />
      <ViewJobs />
    </div>
  );
};

export default Home;
