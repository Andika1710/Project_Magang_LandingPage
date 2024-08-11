import React from 'react';
import one from '../assets/imageOne.png';
import two from '../assets/Rectangle 3.png';
import three from '../assets/Rectangle 4.png';
import four from '../assets/Rectangle 5.png';
import five from '../assets/Rectangle 6.png';
import six from '../assets/Rectangle 7.png';
import logoT from '../assets/logo_T.svg';
import { Link } from 'react-router-dom';

const Facility_details = () => {
  return (
    <main className="px-4 lg:px-[120px] lg:mt-[60px] justify-center items-center">
      <div className="relative flex flex-col gap-2 lg:gap-4 justify-center items-center">
        <figure className="flex flex-col md:flex-row gap-2 lg:gap-4 items-center justify-center md:mt-24">
          <img className="w-full md:w-[592px] md:h-[672px]" src={one} alt="image one" />
          <div className="flex flex-col gap-2 lg:gap-[16px]">
            <img className="w-full md:w-[592px] md:h-[328px]" src={two} alt="image two" />
            <img className="w-full md:w-[200px] md:h-[110px] lg:w-[592px] lg:h-[328px]" src={three} alt="image three" />
          </div>
        </figure>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className="w-[166px]" src={logoT} alt="logo" />
        </div>
        <figure className="flex flex-col md:flex-row gap-2 lg:gap-4 items-center justify-center">
          <div className="flex flex-col gap-2 lg:gap-4">
            <img className="w-full md:w-[150px] lg:w-[592px] lg:h-[185px]" src={four} alt="image four" />
            <img className="w-full md:w-[592px] md:h-[150px] lg:h-[479px]" src={six} alt="image five" />
          </div>
          <img className="w-full md:w-[180px] md:h-[180px] lg:w-[592px] lg:h-[680px]" src={five} alt="image six" />
        </figure>
      </div>
      <div className="flex items-center text-center justify-center w-full mt-[48px]">
        <Link to="/photos_rooms">
          <button className="border px-[32px] py-[13px] text-[10px] lg:text-[16px]">
            View All
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Facility_details;
