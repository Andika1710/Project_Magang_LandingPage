import React from 'react';
import foto1 from '../assets/foto1.png';

const Header = () => {
  return (
        <div className='container mx-auto flex justify-center pb-24 lg:pb-0 '>
            <div className="bg-ijo lg:hidden md:w-[299px] w-[190px] rounded-b-full p-[15.57px] md:pl-[30px] md:pb-[30px] md:pr-[30px] md:pt-[120px] pt-[50px]">
                <img src={foto1} alt="foto 1" className="flex items-center md:items-center" />
            </div>
        </div>
  );
};

export default Header;





 {/*<div className="justify-center items-center">
                <svg width="340" height="340" className="absolute">
                    <defs>
                    <path
                        id="circlePath
                        d="M 170, 170 m -150, 0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
                    />
                    </defs>
                    <text fontSize="16" fill="#fff">
                    <textPath href="#circlePath">
                        Traditional meets modern - Traditional meets modern
                    </textPath>
                    </text>
                </svg>
                <p className="absolute leading-[64.75px] text-[48.58px] text-ijo">CHALET</p>
                <div className=' '>
                    <p className="absolute leading-[64.75px] text-[48.58px] text-ijo">WK</p>
                </div>
                </div> */}