import React, { useEffect } from 'react'
import SliderHome from '../components/SliderHome'
import CategoryHome from '../components/CategoryHome'
import Product from '../components/Product'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
export default function Homepage() {
  useEffect(()=>{
          window.scroll(0,0)
      },[])
  return (
    <div className='min-h-[500px] bg-[#F7F7F7]'>
      <SliderHome/>
      <CategoryHome/>
      <div className="container bg-white mt-5">
        <div className="flex justify-between">
          <h5>Gợi ý cho bạn hôm nay</h5>
          <Link className='xem' to='/tat-ca'>Xem tất cả</Link>
        </div>
        <div className="flex mt-4">
          <Swiper
              slidesPerView={5}
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
              {/* {Array.isArray(slideState) && slideState.map((e, index) => ( */}
              <SwiperSlide>
                  <Product/>
              </SwiperSlide>
              <SwiperSlide>
                  <Product/>
              </SwiperSlide>
              <SwiperSlide>
                  <Product/>
              </SwiperSlide>
              <SwiperSlide>
                  <Product/>
              </SwiperSlide>
              <SwiperSlide>
                  <Product/>
              </SwiperSlide>
              <SwiperSlide>
                  <Product/>
              </SwiperSlide>
              <SwiperSlide>
                  <Product/>
              </SwiperSlide>
              <SwiperSlide>
                  <Product/>
              </SwiperSlide>
              {/* ))} */}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
