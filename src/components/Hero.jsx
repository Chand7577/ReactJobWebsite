import React from "react";

export const Hero = () => {
  return (
    <section className="bg-blue-800 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Become a React Dev
          </h1>
          <h2>made by Amrit</h2>
          <p className="my-4 text-xl text-white">
            Find the React job that fits your skills and needs
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
