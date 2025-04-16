import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
const slideState =[
    {
        img :"https://static.oreka.vn/fd85db97-5f7d-4dbe-acdb-d2ea81cbee13"
    },
    {
        img:"https://static.oreka.vn/65b4f05d-0109-49c1-917d-6816652f045a"
    }
]
function SliderHome() {
  return (
    <section className='py-4'>
      <div className="container">
        <div className="flex h-[250px]">
            <div className="w-[70%] pe-4">
            <Swiper
                slidesPerView={1}
                spaceBetween={40}
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation,Autoplay]}
                className="mySwiper"
                >
                {Array.isArray(slideState) && slideState.map((e, index) => (
                <SwiperSlide key={index}>
                    <img width="100%" className='h-[250px] rounded' src={e?.img} alt="" />
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <div className="w-[30%] flex flex-col gap-[1.2rem]">
                <img className='block h-1/2 relative rounded-lg overflow-hidden ratio-[375/179]' src="https://static.oreka.vn/d/_next/static/images/new-refund-banner-fcf635b6f76e3280dad57f2d9b61207b.webp" alt="" />
                <img className='block h-1/2 relative rounded-lg overflow-hidden ratio-[375/179]' src="https://static.oreka.vn/d/_next/static/images/new-download-app-banner-71e326b70e915798d388eab9ebdd1ee4.webp" alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default SliderHome
