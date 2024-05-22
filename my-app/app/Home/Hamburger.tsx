"use client"
import React, { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';

const Hamburger = () => {
 
  const [isVisible, setIsVisible] = useState(false);

  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='sm:block md:block lg:hidden'>
      <div className={isVisible ? 'block' : 'hidden'}>
        salam olsun azerbaycan esgerine
      </div>

      <button onClick={toggleVisibility} className='m-7'>
        <FaHamburger size={26} />
      </button>
    </div>
  )
}

export default Hamburger;
