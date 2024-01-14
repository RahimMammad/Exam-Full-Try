import React from 'react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./index.scss"

const Excellent = () => {
    
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className='slider-page-1'>
                <h3>Floral</h3>
                <h1>Excellent bouquets for you</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slider-page-2'>
                <h3>Floral</h3>
                <h1>Excellent bouquets for you</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slider-page-3'>
                <h3>Floral</h3>
                <h1>Excellent bouquets for you</h1>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default Excellent