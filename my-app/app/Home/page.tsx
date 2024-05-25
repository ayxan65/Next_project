import React from 'react';
import '../css/home.css';
import İnfo from './İnfo'
import NavBar from './NavBar';
import Header from './Header';
import HeaderBottom from './HeaderBottom';
import Motor from './Motor';
import moto from '../assets/moto2.svg';
import Acsosories from './Acsosories';
import Gallery from './Gallery';
import Colors from './Colors';
import Testimonials from './Testimonials';


const Page = () => {
  
  return (
   <>
   <NavBar/>
   <Header/>
   <HeaderBottom/>
    <İnfo title='Product Information' desc='Our Scooter has following unique design and technology features:' img={moto}/>
    <Motor/>
    <Acsosories/>
    <Gallery/>
    <Colors/>
    <Testimonials/>

   </>
  );
}

export default Page;
