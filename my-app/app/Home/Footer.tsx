import React from "react";
import Image from "next/image";
import moto from "../assets/footermoto.svg";
import logo from '../assets/logos.svg';
const Footer = () => {
  return (
   <div className="bg-stone-700">
     <div className="bg-stone-700 w-full h-80 mt-16 flex">
      <div className="sm:hidden lg:block z-10 relative bottom-12">
        <Image src={moto} alt="moto" width={400} height={600}></Image>
      </div>
      <div className=" w-9/12 h-80 flex justify-around items-center ">
        <div className="flex justify-between w-1/2 text-white flex-wrap  ">
          <div>
            <div className="font-bold text-xl  ">About</div>
          <div className="pt-8">Company</div>
          <div className="mt-5">Teams</div>
          <div className="mt-5">Profile</div>
          <div className="mt-5">   Careers </div>
          </div>
          <div>
            <div className="font-bold text-xl ">Resources</div>
            <div className="pt-8">Company</div>
          <div className="mt-5">Teams</div>
          <div className="mt-5">Profile</div>
          <div className="mt-5">   Careers </div>
          </div>
          <div>
            <div className="font-bold text-xl ">Legals</div>
            <div className="pt-8">Company</div>
          <div className="mt-5">Teams</div>
          <div className="mt-5">Profile</div>
          <div className="mt-5">   Careers </div>
          </div>
  
        </div>
      </div>
          
    </div>
   <div className="w-9/12 flex justify-end py-5 relative left-20"> <Image src={logo} alt="logos"></Image></div>
   </div>
  );
};

export default Footer;
