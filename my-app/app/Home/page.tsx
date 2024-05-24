import React from 'react';
import '../css/home.css';
import İnfo from './İnfo'
import NavBar from './NavBar';
import Header from './Header';
import HeaderBottom from './HeaderBottom';


const Page = () => {
  
  return (
   <>
   <NavBar/>
   <Header/>
   <HeaderBottom/>
    <İnfo/>
   
   </>
  );
}

export default Page;
