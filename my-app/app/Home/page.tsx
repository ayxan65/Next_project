import React from 'react';
import '../css/home.css';
import Image from 'next/image';
import Logo from '../assets/logo1.svg';
import NavBar from './NavBar';
import Header from './Header';
import HeaderBottom from './HeaderBottom';


const Page = () => {
  
  return (
   <>
   <NavBar/>
   <Header/>
   <HeaderBottom/>
   
   </>
  );
}

export default Page;
