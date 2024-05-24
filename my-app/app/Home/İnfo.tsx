import React from 'react';
import Image from 'next/image';
import moto from '../assets/moto2.svg';
import İnfoData from '../MockData/İnfoData';


const İnfo = ({title, desc, img}:any) => {
  return (
    <>
        <div className='mt-20'>
            <div className='flex flex-col items-center h-20 justify-between'>
                <div className='text-stone-800 text-4xl font-extrabold'>
               {title}
                </div>
                <div className='text-stone-700'>
                {desc}

                </div>
            </div>
            <div className='flex '>
                <div>
                <Image src={img} alt='moto'></Image>
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