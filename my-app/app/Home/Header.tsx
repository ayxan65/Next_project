import React from 'react';
import Image from 'next/image';
import '../css/home.css';
import { FaLeftRight } from 'react-icons/fa6';
import Moto from '../assets/Moto.svg'

const Header = () => {
  return (
 
    <div className='  h-full mx-7 py-2 '>
        <div className=' mt-16 flex justify-between'>
      
        <div className='flex flex-col'><span className='text-stone-600  text-6xl'>Let's Ride</span>
                <span className='font-bold text-8xl text-stone-700'>The Future</span>
            </div>
        </div>
        <div className='w '></div>
        <div className='text-stone-800 mt-14 text-xl '><p className='w-64'>simple and sleek desing users in mind</p></div>
        <div className='mt-16'>Buy now</div>
       <FaLeftRight/>
        
       

    </div>
  )
}

export default Header