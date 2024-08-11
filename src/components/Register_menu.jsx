import React from 'react';
import bg_f from '../assets/bg_F.png';
import logo_t from '../assets/logo_T.svg';

const Register_menu = () => {
  return (
    <main className='w-full h-full mt-[82px] relative'>
      <img className='absolute left-1/2 transform -translate-x-1/2 pt-[585px] w-[80px] md:w-auto' src={logo_t} alt="Logo" />
      <div className='absolute top-[215px] text-center w-full md:w-auto md:text-end md:pl-[967px] font-playfair leading-tight md:leading-[65.92px] pr-[20px] md:pr-[120px] text-white text-[24px] md:text-[64px] px-4'>
        <p>Traditional meets Modern</p>
        <button className='border px-4 py-2 mt-4 text-[8px] lg:text-[12px] md:text-[16px]'>
          Book Now
        </button>
      </div>
      <img className='w-full' src={bg_f} alt="background_footer" />
    </main>
  );
}

export default Register_menu;
