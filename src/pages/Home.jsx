import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Facility_details from '../components/Facility_details'
import Location from '../components/Location'
import Reviews from '../components/Reviews'
import Reviews_details from '../components/Reviews_details'
import Register_menu from '../components/Register_menu'
import Menu_order from '../components/Menu_order'
import Footer from '../components/Footer'
import Facility from '../components/Facility'
import Frame10 from '../components/Frame10'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact_us from '../components/contact_us/Contact_us'

AOS.init();

const Home = () => {
  return (
    <main 
    className="bg-Bg1 w-full h-full px-[20px] md:px-[92px] lg:px-0">
    <Header/>
  <div className='bg-white'>
    <Menu/>
    <Facility/>
    <Facility_details/>
    <Location/>
    <div className='bg-Bg1 mx-[100px] rounded-2xl    '>
    <Reviews/>
    </div>
    <Reviews_details/>
    
    <Register_menu/>
    <Menu_order/>
   
    <div className='bg-Bg1 h-full   '>
    <Footer/>
    </div>
    {/* <Frame10/> */}

    
 

  </div>
</main>
  )
}

export default Home