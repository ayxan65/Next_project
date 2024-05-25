import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="text-stone-800 text-4xl font-extrabold mb-4">
        Subscribe To Newsletter
      </div>
      <div className="text-stone-700 mb-6 text-center">
        Subscribe to our newsletter to get amazing offers in the future.
      </div>
 
    <div className="flex my-3">
    <input
          type="email"
          placeholder="Enter your email"
          className="  flex-grow  border-2 rounded-md h-14 w-96 "
        />
      
      <div><button className="h-14 w-32 flex items-center justify-center rounded-md bg-stone-800 text-white mx-3">Get start</button></div>
    </div>
       </div>
  
  );
};

export default Subscribe;
