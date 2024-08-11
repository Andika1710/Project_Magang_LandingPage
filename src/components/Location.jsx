import React, { useState, useEffect } from 'react';
import logoT from '../assets/logo_T.svg';

const Location = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  const text1 = "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.";
  const text2 = "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.";

  return (
    <main className='text-center justify-center mt-[48px]'>
      <div className="flex mt-[100px] relative">
        <iframe
          className="w-[150px] h-[150px] lg:w-[712px] lg:h-[585px] rounded-3xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31688.268658539255!2d106.7824431!3d-6.886581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6835d925378f93%3A0xa6b3adddbbcabc16!2sFitra%20Pratama%20Residence!5e0!3m2!1sid!2sid!4v1720173718462!5m2!1sid!2sid"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className="w-[60px] lg:w-[166px]" src={logoT} alt="logo" />
        </div>
        <div className="ml-7 lg:ml-[125px] font-playfair">
          <h1 className="mb-[10px] text-[15px] lg:text-[40px] text-ijo text-start">Where You’ll be</h1>
          <div className="w-[150px] lg:w-[491px] justify-start text-start font-poppins text-[8px] lg:text-[14px]">
            <p>{isMobile ? truncateText(text1, 30) : text1}</p>
            <p className="pt-2">{isMobile ? truncateText(text2, 30) : text2}</p>
            <a href="https://www.google.com/maps/place/Fitra+Pratama+Residence/@-6.8739329,106.8245863,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6835d925378f93:0xa6b3adddbbcabc16!8m2!3d-6.8739382!4d106.8271612!16s%2Fg%2F11sv6bcw61?entry=ttu">
              <button className="mt-[40px] justify-start text-start border px-[32px] py-[13px] text-[8px] lg:text-[16px]">
                Check The Location
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Location;
