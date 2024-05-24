import React from 'react';
import Image from 'next/image';
import scooter from '../assets/scooter.svg';
import AcsosoriesData from '../MockData/AcsosoriesData';
import bat from '../assets/Bat.svg';
import motor from '../assets/motor.svg';
import basket from '../assets/basket.svg';
import Acbutton from './Acbutton';

const Acsosories = () => {
  return (
    <>
    <div >
        <div className='flex flex-col items-center  '>
            <div className='text-stone-800 font-extrabold text-4xl'>
            Multiple Accessories
            </div>
            <div className='mt-3 text-stone-700'>
            There are multiple modes for the scooter for your multiple needs.

            </div>
        </div>
      <div className='flex justify-between mt-16 '>
   <div className='order-1 flex' >
   <div className='mt-5'> <Image src={bat} alt='bat'></Image></div>
   <Image src={scooter} alt='scooter'></Image>
   </div>
 <div className='mt-20'>
    <div className='mx-7 text-3xl font-extrabold text-stone-700 mb-6'>Golf Bag Rock</div>
 <AcsosoriesData/>
 </div>
      </div>
      <div className='flex justify-between mt-16 '>
   <div className=' flex' >
   <div className='mt-5'> <Image src={motor} alt='bat'></Image></div>
   <Image src={basket} alt='scooter'></Image>
   </div>
 <div className='mx-12 mt-20 order-1'>
    <div className='mx-7 text-3xl font-extrabold text-stone-700 mb-6'>Shopping Rack</div>
 <AcsosoriesData/>
 </div>
      </div>
       
    </div>
    <Acbutton margin='80px' title='More Accessories Coming Soon'/>
    </>
  )
}

export default Acsosories