import React from 'react';
import Image from 'next/image';
import moto from '../assets/motodetails.svg';
const Motor = () => {
  return (
    <>
    <div>
        <div className='flex flex-col items-center  '>
            <div className='text-stone-800 font-extrabold text-4xl'>
            High Efficiency Motor
            </div>
            <div className='mt-6 text-stone-700'>
            More torque for powerful riding with 22% maximum hill climbing capability.

            </div>
        </div>
        <div>
           <Image src={moto} alt='moto details'></Image>
        </div>
    </div>
    </>
  )
}

export default Motor