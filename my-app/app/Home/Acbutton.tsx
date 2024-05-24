import React from "react";

const Acbutton = ({title,margin}:any) => {
  return (
    <>
      <div className="flex justify-center " style={{marginTop:margin}}>
        
        <div className="border-2 flex justify-center items-center border-gray-700 rounded w-96 h-16">
          <div className="font-bold text-xl text-stone-700">{title}</div>
        </div>
      </div>
    </>
  );
};

export default Acbutton;
