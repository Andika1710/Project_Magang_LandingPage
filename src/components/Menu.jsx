import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
  const [isUlVisible, setIsUlVisible] = useState(false);

  const toggleUlVisibility = () => {
    setIsUlVisible(!isUlVisible);
  };

  const closeUl = () => {
    setIsUlVisible(false);
  };


  return (
    <>
      <div className="main container mx-auto bg-hero-pattern bg-cover bg-center bg-no-repeat lg:max-w-full rounded-t-xl lg:rounded-none lg:px-[120px] md:px-[50px] px-[20px] lg:h-[810px]">
        <div className='w-full flex justify-between rounded-xl'>
        <div>
      <div className="menu">
        <button onClick={toggleUlVisibility} className='ml-[14.63px] lg:ml-[74.63px] mt-[32px] lg:mt-[32px] font-playfair text-white text-[9.95px] lg:text-[16px]'>
          Menu
        </button>
      </div>
      {isUlVisible && (
        <div className='absolute bg-opacity-50 mt-[10px] bg-ijo rounded-3xl ml-4 w-[150px] h-[260px] flex flex-col text-center duration-500'>
          <ul className='flex flex-col gap-[25px] duration-500 text-white py-5'>
            <li onClick={closeUl}><a href="#Facility">Facility</a></li>
            <li onClick={closeUl}>Room photo</li>
            <li onClick={closeUl}>Location</li>
            <li onClick={closeUl}>Review</li>
            <li onClick={closeUl}>Order now</li>
          </ul>
        </div>
      )}
    </div>
          <div className="logo flex flex-col justify-center items-center">
            <p className='mt-[25px] text-white font-playfair text-[13.93px] lg:text-[22.4px]'> CHALET</p>
            <div className='flex justify-center items-center'>
              <p className='text-white'>---</p>
              <p className='text-white font-playfair text-[13.93px] lg:text-[22.4px]'> WK</p>
              <p className='text-white'>---</p>
            </div>
          </div>
          <div className="contact">
            <Link to='/contact_us'>
              <p className='mr-[14.63px] lg:mr-[41.79px] mt-[32px] font-playfair text-white text-[9.95px] lg:text-[16px]'>Contact Us</p>
            </Link>
          </div>
        </div>
        <div className='flex flex-col text-center text-white font-playfair text-[39.8px] lg:text-[64px] leading-[40.99px] lg:leading-[65.92px] mt-[220.13px]'>
          <p>Traditional</p>
          <p>meets</p>
          <p>Modern</p>
        </div>
        <div className='mt-[235px]'>
          <a href="#Facility">
            <p className='text-white text-center'>Scroll down</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Menu;
