import React from 'react'
import bintang from '../assets/bintang.svg'
import ceklis from '../assets/ceklis.svg'
import check_in from '../assets/check_in.svg'
import pesan from '../assets/pesan.svg'
import map from '../assets/map.svg'
import harga from '../assets/harga.svg'
import icon from '../assets/iconB.svg'
import vector from '../assets/Vector5.svg'
import vector2 from '../assets/Vector4.svg'

const Reviews = () => {
  const data = [
    {
      img: bintang,
      title: '5.0',
      alt: 'icon_bintang',
      name: 'Cleanliness'
    },
    {
      img: ceklis,
      title: '5.0',
      alt: 'icon_ceklis',
      name: 'Accuracy'
    },
    {
      img: check_in,
      title: '5.0',
      alt: 'icon_check_in',
      name: 'Check-in'
    },
    {
      img: pesan,
      title: '5.0',
      alt: 'icon_pesan',
      name: 'Communication'
    },
    {
      img: map,
      title: '5.0',
      alt: 'icon_map',
      name: 'Location'
    },
    {
      img: harga,
      title: '5.0',
      alt: 'icon_harga',
      name: 'Value'
    },
  ]

  return (
    <main className="font-poppins text-ijo">
      <div className="flex w-full h-full mt-[50px] md:mt-[100px] pt-[25px] md:pt-[50px] items-center justify-center" id="Reviews">
        <img className="w-6 h-6 mr-3" src={icon} alt="IconBintang" />
        <p className="text-[20px] md:text-[24px]">5.0 From 40 Reviews</p>
      </div>

      <div className="px-4 md:px-[52px] py-2 grid grid-cols-2 md:grid-cols-7 gap-2 md:gap-[27px] justify-center text-center mt-[24px] pb-[75px]">
        <div className="col-span-2 md:col-span-1">
          <h1 className="text-[10px] md:text-[14px]">
            Overall rating
            <div className="grid grid-rows-5 mt-2">
              <div className="flex items-center">
                <p className="text-[10px] md:text-[14px]">5</p>
                <img className="w-full h-1 ml-2" src={vector} alt="Vector" />
              </div>
              <div className="flex items-center mt-1">
                <p className="text-[10px] md:text-[14px]">4</p>
                <img className="w-full h-1 ml-2" src={vector2} alt="vector" />
              </div>
              <div className="flex items-center mt-1">
                <p className="text-[10px] md:text-[14px]">3</p>
                <img className="w-full h-1 ml-2" src={vector2} alt="vector" />
              </div>
              <div className="flex items-center mt-1">
                <p className="text-[10px] md:text-[14px]">2</p>
                <img className="w-full h-1 ml-2" src={vector2} alt="vector" />
              </div>
              <div className="flex items-center mt-1">
                <p className="text-[10px] md:text-[14px]">1</p>
                <img className="w-full h-1 ml-2" src={vector2} alt="vector" />
              </div>
            </div>
          </h1>
        </div>
        {data.map((item) => (
          <div key={item.title} className="flex flex-col items-center justify-center text-center border-l-0 md:border-l-[2px] border-gray-300">
            <p className="text-[8px] md:text-[14px]">{item.name}</p>
            <p className="text-[16px] md:text-[48px]">{item.title}</p>
            <img className="w-[20px] md:w-[50px] h-auto" src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Reviews
