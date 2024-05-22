"use client"
import React, { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';

const Hamburger = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='relative sm:block md:block lg:hidden'>
      <div
        className={`cursor-auto my-5 flex flex-col items-center fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='cursor-pointer py-3'>Product</div>
        <div className='cursor-pointer py-3'>Gallery</div>
        <div className='cursor-pointer py-3'>Contact</div>
        <div className='cursor-pointer py-3 flex flex-col items-center'>
        <div className='my-5 '>
        <button className='mx-6 mb-3 text-black'>Log in</button>
          <button 
            className='bg-stone-700 text-white rounded-lg py-2 px-4'
          >
            Sign up
          </button>
        </div>
        </div>
      </div>

      <button onClick={toggleVisibility} className='m-7'>
        <FaHamburger size={26} />
      </button>
    </div>
  )
}

export default Hamburger;
