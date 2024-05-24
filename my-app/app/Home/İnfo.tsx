import React from 'react';
import Image from 'next/image';
import moto from '../assets/moto2.svg';
import İnfoData from '../MockData/İnfoData';


const İnfo = () => {
  return (
    <>
        <div className='my-20'>
            <div className='flex flex-col items-center h-20 justify-between'>
                <div className='text-stone-800 text-3xl font-extrabold'>
                Product Information
                </div>
                <div className='text-stone-700'>
                Our Scooter has following unique design and technology features:

                </div>
            </div>
            <div className='flex '>
                <div>
                <Image src={moto} alt='moto'></Image>
                </div>
                <div className='m-28'>
                   <İnfoData/>
                </div>
            </div>
        </div>
    </>
  )
}

export default İnfo