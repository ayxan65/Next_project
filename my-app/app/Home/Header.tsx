import React from 'react';
import Image from 'next/image';


const Header = () => {
  return (
 
    <div className='  h-full mx-7 py-2 '>
        <div className='flex justify-between'>
            <div className='flex flex-col'><span className='text-stone-600  text-6xl'>Let's Ride</span>
                <span className='font-bold text-8xl text-stone-700'>The Future</span>
            </div>
        </div>

    </div>
  )
}

export default Header