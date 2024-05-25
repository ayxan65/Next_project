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
 
       <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 outline w-96 rounded"
        />
      
       </div>
  
  );
};

export default Subscribe;
