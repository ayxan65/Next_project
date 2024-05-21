import React from 'react';
import '../css/home.css'

const Page = () => {

  return (
    <div className=' border h-full mx-7 py-2 '>
      <div  className='  flex justify-between items-center gap-12 text-stone-700 py-4 mx-4'>

      <img className='bg-red-500 text-black' src="../assets/logo.png" alt="" />
     
    <div className='flex gap-12'>
    <div className='cursor-pointer py-2'>Product</div>
        <div className='cursor-pointer py-2'>Galery</div>
        <div className='cursor-pointer py-2'>Contact</div>
    </div>
        
     <div className='cursor-pointer'>
      <button className='mx-6'>Log in</button>
      <button className='bg-stone-700 text-white rounded-lg py-2 px-4 cursor-pointer' >Sing up</button>
     </div>
      </div>

    </div>
  );
}

export default Page;
