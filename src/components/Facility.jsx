import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import pintu from '../assets/pintu.svg'
import kasur from '../assets/kasur.svg'
import Kartu from '../assets/Kartu.svg'
import Bak from '../assets/Bak_mandi.svg'
import Barbel from '../assets/Barbel.svg'
import internet from '../assets/internet.svg'
import Sauna from '../assets/Sauna_icon.svg'
import dapur4 from '../assets/dapur4.png'
import wc4 from '../assets/wc4.png'
import Ror4 from '../assets/Ror4.png'
import { Navigation } from 'swiper/modules';


const Facility = () => {

  const data = [
    {
      'img' : pintu,
      'title' : '5 Bedrooms',
      'alt' : 'pintu'
    },
    {
      'img' : kasur,
      'title' : 'Sleeps 10+',
      'alt' : 'kasur'
    },
    {
      'img' : Kartu,
      'title' : 'Can be fully staffed',
      'alt' : 'Kartu'
    },
    {
      'img' : Bak,
      'title' : '4 Bathrooms',
      'alt' : 'Bak mandi'
    },
    {
      'img' : Barbel,
      'title' : 'Indoor gym with peloton bikes',
      'alt' : 'Barbel'
    },
    {
      'img' : internet,
      'title' : 'Super fast internet',
      'alt' : 'internet'
    },
    {
      'img' : Sauna,
      'title' : 'Sauna and outdoor Jacuzzi',
      'alt' : 'Sauna_icon'
    },

  ]

  const data2 =[
    
    
    
  ]

  const dataKamar = [
    {
      'img' : dapur4,
      'title' : 'Kitchen',
      'alt' : 'pintu',
      'name': 'Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.' 
    },
    {
      'img' : wc4,
      'title' : 'bathroom',
      'alt' : 'kasur',
      'name': 'Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.' 
    },
    {
      'img' : Ror4,
      'title' : 'Indoor Gym',
      'alt' : 'Kartu',
      'name': 'Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.' 
    },
    

  ]

  return (
    <main className='pt-[29px] lg:pt-[48px] text-ijo w-full lg:h-screen  lg:pb-[280px] pb-2'>
      
      
      <div className='grid grid-cols-3 justify-start md:w-full '>
        <div className='h-[75px] w-[474px] ml-2 lg:ml-[196px] ' id='Facility'>
          <p className='  leading-[20.99px] md:leading-[40.99px] lg:leading-[65.92px] text-[15px] md:text-[30px] lg:w-[374px] lg:text-[64px] font-playfair '>What we provide</p>
        </div>

        <div className='flex flex-col lg:ml-[50px]'>
        <div className='grid grid-cols-3 lg:grid-cols-4 w-[180px] lg:w-[984px] h-[24px] justify-center items-center text-center px-2 '>
          {
            data.map(item => {
            {
              return (
              
                  <div key={item.title} className=' gap-[5px] lg:gap-[20px] flex  lg:pb-5  '>
                    <img className=' size-2 lg:size-5  ' src={item.img} alt={item.alt} />
                    <p className='text-[5px] md:text-[9px] lg:text-[14px] '>{item.title}</p>
                  </div>
              )
            }
            })
          }
        </div>
      
        <div className='grid grid-cols-2 w-[150px] lg:w-[660px] mt-3  h-[24px] gap-3 justify-center items-center text-start'>
          {
            data2.map(item => {
            {
              return (
              
                  <div key={item.title} className=' gap-2  flex lg:mt-10 '>
                    <img className=' size-2 lg:size-5 ' src={item.img} alt={item.alt} />
                    <p className='text-[5px] md:text-[9px] lg:text-[14px] '>{item.title}</p>
                  </div>
              )
            }
            })
          }
        </div>

      </div>
      </div>

      

      <div className='px-[20px] lg:px-[121px] md:mt-[70px] lg:mt-[121px]'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {dataKamar.map(item => (
                  <SwiperSlide key={item.title}>
                    <div className="gap-3 w-full flex flex-col items-center">
                      <img src={item.img} alt={item.alt} className="mx-auto" />
                      <p className="text-[10px] lg:text-[24px]">{item.title}</p>
                      <p className="text-[5px] md:text-[9px] lg:text-[14px]">{item.name}</p>
                    </div>
                  </SwiperSlide>
                ))}
          
          </Swiper>
      </div>
    </main>

    
  )
}

export default Facility