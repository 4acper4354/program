import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

const SwpierBox = () => {
    return (
        <Swiper 
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          slidesPerView={1}
          effect={'fade'}
          loop={true}
          modules={[Autoplay, EffectFade]}

        >
          <SwiperSlide>
          <div className='w-full bg-[#212121] flex md:flex-col'>
            <div className='w-1/2 flex flex-col items-center justify-center md:h-[300px] md:w-auto'>
              <p className='text-[#fff] text-[40px] sm:text-[30px]'>LOVE WITH LOFT</p>
              <p className='text-[#fff] text-[30px] sm:text-[20px]'>Najlepsza firma meblarska w Polsce!</p>
            </div>
            <img src='https://bswns.szkolybranzowe.edu.pl/wp-content/uploads/2020/02/stolarz.jpg' className='w-1/2 md:h-[300px] md:w-auto'></img>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='w-full bg-[#212121] flex md:flex-col'>
            <div className='w-1/2 flex flex-col items-center justify-center md:h-[300px] md:w-auto'>
              <p className='text-[#fff] text-[40px] md:text-[30px]'>LOVE WITH LOFT</p>
              <p className='text-[#fff] text-[30px] md:text-[20px]'>Slajd 2</p>
            </div>
            <img src='https://www.ferpol.pl/blog/wp-content/uploads/2020/06/stolarz-z-pasem-na-narzedzia.jpg' className='w-1/2 md:h-[300px] md:w-auto'></img>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='w-full bg-[#212121] flex md:flex-col'>
            <div className='w-1/2 flex flex-col items-center justify-center md:h-[300px] md:w-auto'>
              <p className='text-[#fff] text-[40px] md:text-[30px]'>LOVE WITH LOFT</p>
              <p className='text-[#fff] text-[30px] md:text-[20px]'>Slajd 3</p>
            </div>
            <img src='https://bswns.szkolybranzowe.edu.pl/wp-content/uploads/2020/02/stolarz.jpg' className='w-1/2 md:h-[300px] md:w-auto'></img>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full bg-[#212121] flex md:flex-col'>
            <div className='w-1/2 flex flex-col items-center justify-center md:h-[300px] md:w-auto'>
              <p className='text-[#fff] text-[40px] md:text-[30px]'>LOVE WITH LOFT</p>
              <p className='text-[#fff] text-[30px] md:text-[20px]'>Slajd 4</p>
            </div>
            <img src='https://www.ferpol.pl/blog/wp-content/uploads/2020/06/stolarz-z-pasem-na-narzedzia.jpg' className='w-1/2 md:h-[300px] md:w-auto'></img>
          </div>
          </SwiperSlide>

        </Swiper>
      );
}

export default SwpierBox