import React, { useEffect } from 'react';
import pintu from '../../assets/photos_rooms/foto1.png';
import kasur from '../../assets/photos_rooms/foto2.jpg';
import Kartu from '../../assets/photos_rooms/foto3.jpg';
import Bak from '../../assets/photos_rooms/foto4.jpg';
import Barbel from '../../assets/photos_rooms/foto5.jpg';
import internet from '../../assets/photos_rooms/foto6.jpg';
import Sauna from '../../assets/photos_rooms/foto7.jpg';
import dapur4 from '../../assets/photos_rooms/foto8.jpg';
import wc4 from '../../assets/photos_rooms/foto9.jpg';
import Ror4 from '../../assets/photos_rooms/foto10.jpg';
import Foto11 from '../../assets/photos_rooms/foto11.jpg';
import Foto12 from '../../assets/photos_rooms/foto12.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

AOS.init();

const PhotosRooms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const data = [
        {
            'img': pintu,
            'title': '5 Bedrooms',
            'alt': 'pintu'
        },
        {
            'img': kasur,
            'title': 'Sleeps 10+',
            'alt': 'kasur'
        },
        {
            'img': Kartu,
            'title': 'Can be fully staffed',
            'alt': 'Kartu'
        },
        {
            'img': Bak,
            'title': '4 Bathrooms',
            'alt': 'Bak mandi'
        },
        {
            'img': Barbel,
            'title': '5 Bedrooms',
            'alt': 'Barbel'
        },
        {
            'img': internet,
            'title': 'Sleeps 10+',
            'alt': 'internet'
        },
        {
            'img': Sauna,
            'title': 'Can be fully staffed',
            'alt': 'Sauna'
        },
        {
            'img': dapur4,
            'title': '4 Bathrooms',
            'alt': 'dapur'
        },
        {
            'img': wc4,
            'title': 'Can be fully staffed',
            'alt': 'wc'
        },
        {
            'img': Ror4,
            'title': '4 Bathrooms',
            'alt': 'Ror'
        },
        {
            'img': Foto11,
            'title': 'Can be fully staffed',
            'alt': 'Foto11'
        },
        {
            'img': Foto12,
            'title': '4 Bathrooms',
            'alt': 'Foto12'
        },
    ];

    const handleClick = () => {
        navigate('/');
    };

    return (
        <main>
            <div className='flex justify-center text-center items-center pt-[50px]'>
                <p className='text-[40px] font-playfair'>Photos of all the rooms</p>
            </div>
            <div className='flex justify-center pt-[50px]'>
                <button
                    onClick={handleClick}
                    className='px-4 py-2 bg-blue-500 text-white rounded'
                >
                    Kembali ke Halaman Utama
                </button>
            </div>

            <div className='grid grid-cols-3 h-[24px] text-center items-center justify-center mx-auto'>
                {
                    data.map(item => (
                        <div key={item.title} 
                            data-aos="zoom-in"  
                            data-aos-duration="1000" 
                            data-aos-easing="zoom-in" 
                            data-aos-delay="100" 
                            data-aos-offset="0" 
                            data-aos-anchor-placement="top-center" 
                            className='flex justify-center text-center items-center pt-[50px] gap-9 flex-col'>
                            <img className='flex size-[350px] rounded-2xl w-[400px]' src={item.img} alt={item.alt} />
                            <p className='text-[5px] md:text-[9px] lg:text-[14px]'>{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </main>
    );
};

export default PhotosRooms;

