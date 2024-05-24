import React from "react";
import quality from "../assets/quality.svg";
import scooter from "../assets/scooter2.svg";
import parts from "../assets/parts.svg";
import Image from "next/image";
import Acbutton from "./Acbutton";

const Gallery = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-16  ">
        <div className="text-stone-800 font-extrabold text-4xl">Gallery</div>
        <div className="mt-3 text-stone-700">
          View gallery of our products and make yourself satisfied with our
          creation.
        </div>
      </div>
      <div className="flex flex-wrap gap-10 mt-10 mx-7">
      <div className="w-full flex justify-between">
      <div className="my-20">
          <Image src={scooter} alt="parts of scooter"></Image>
        </div>
        <div >
          <Image src={quality} alt="parts of scooter"></Image>
        </div>
      </div>
      <div className="flex justify-between w-full ">
      <div className="order-1">
          <Image src={parts} alt="parts of scooter"></Image>
        </div>
        <div>
          <div className="sm:w-56 md:w-72 lg:w-96"><Acbutton margin='1.7em' title='Battery Images'/></div>
          <div className="sm:w-56 md:w-72 lg:w-96"><Acbutton margin='1.7em' title='Spare Parts Images'/></div>
          <div className="sm:w-56 md:w-72 lg:w-96"><Acbutton margin='1.7em' title='Charging Cable Images'/></div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Gallery;
