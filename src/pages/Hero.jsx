import React from 'react';
import Typed from 'react-typed';


const Hero = () => {
   const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
   }
  return (
    <div className="text-white bg-slate-600">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[black] font-bold p-2 text-3xl">
          With Machine Learning
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Authentic News
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">News</p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Understanding ", "Identifying", "Misinformation"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        
          <button  onClick={handleClick} className="bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
            Get Started
          </button>
        
      </div>
    </div>
  );
};

export default Hero;