import React from 'react';
import foto1 from '../assets/foto1.png';

const Footer = () => {
  return (
    <main className='flex flex-col lg:flex-row container pb-24 lg:pb-0 space-y-10 lg:space-y-0 lg:space-x-10'>
      <div className="bg-ijo mx-auto lg:ml-[123px] md:w-[299px] w-[190px] rounded-b-full p-[15.57px] md:pl-[30px] md:pb-[30px] md:pr-[30px] md:pt-[120px] pt-[50px] flex justify-center items-center">
        <img src={foto1} alt="foto 1" className="md:w-auto w-full" />
      </div>
      <div className='w-full lg:w-[400px] mt-[95px] text-[20px] font-playfair text-ijo text-center lg:text-left'>
        <p className='lg:ml-[122px] font-bold'>
          “Morem ipsum dolor sit amet, consectetur adipiscing elit.Morem ipsum dolor sit amet, consectetur adipiscing elit.”
        </p>
      </div>
      <main className=' mx-4 flex flex- text-center gap-4'>
      <div className=' lg:pl-[134px] mt-[95px] text-ijo'>
        <h1 className='text-[24px] font-bold font-playfair'>
          Menu
        </h1>
        <h2 className='flex flex-col w-[80px] text-[14px] leading-[40px] mt-[24px] font-poppins'>
          <a href="#">About Us</a>
          <a href="#">Pricing</a>
          <a href="#">Contact Us</a>
        </h2>
      </div>
      <div className='lg:pl-[50px] mt-[95px] text-ijo w-[170px]'>
        <h1 className='text-[24px] font-bold font-playfair'>
          Facilities
        </h1>
        <h2 className='flex flex-col text-[14px] leading-[40px] mt-[24px] font-poppins'>
          <a href="#">Sauna</a>
          <a href="#">Bedroom</a>
          <a href="#">Road trip</a>
          <a href="#">Gorges & Capes</a>
          <a href="#">Ski</a>
        </h2>
      </div>
      <div className='lg:pl-[48px] mt-[95px] text-ijo w-[140px]'>
        <h1 className='text-[24px] font-bold font-playfair'>
          Find Us
        </h1>
        <h2 className='flex flex-col text-[14px] leading-[40px] mt-[24px] font-poppins'>
          <a href="#">AirBNB</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Youtube</a>
        </h2>
      </div>
      </main>
    </main>
  );
}

export default Footer;
