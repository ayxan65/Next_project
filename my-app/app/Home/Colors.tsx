import React from 'react';
import scooter from '../assets/Bigscooter.svg';
import Image from 'next/image';
import bigfour from '../assets/fourimg.svg';

const Colors = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-16  ">
        <div className="text-stone-800 font-extrabold text-4xl">Colors</div>
        <div className="mt-6 text-stone-700">
        Checkout our products colors.
         
        </div>
      </div>
      <div className='mt-32'>
      <Image src={scooter} alt='scooter'></Image>
      </div>
      <div className="relative bottom-32 z-10">
        <Image src={bigfour} alt='scooter' ></Image>
      </div>


    </>
  )
}

export default Colors