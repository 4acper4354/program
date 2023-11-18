'use client'
import {useState} from 'react'
import Image from 'next/image'
import ProductCard from '@/Components/ProductCard'
import dataProducts from '@/Components/Data'
import SwpierBox from '@/Components/SwpierBox'
import biurka from "@/images/biurka.jpg"
import szafa from "@/images/szafa.jpg"
import komoda from "@/images/komoda.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

export default function Home() {

  const [data, setData] = useState(dataProducts)
  
  const recommendedElemnt = data.recommended.map(element => {
    return  <ProductCard name={element.name} description={element.description} price={element.price} mark={element.mark} opinionsNumber={element.opinionsNumber} image={element.image} />
  })
  const newsElemnt = data.news.map(element => {
    return  <ProductCard name={element.name} description={element.description} price={element.price} mark={element.mark} opinionsNumber={element.opinionsNumber} image={element.image} />
  })

  return (
    <>

      <main>

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

        {/* recommended */}
        <div className='p-[50px] sm:px-[10px]'>

          <div className='w-full flex justify-center'>
            <p className='text-[35px] m-[10px] mt-0 font-headings flex self-center'>Polecane</p>
          </div>

          <div className='flex overflow-x-scroll'>
            {recommendedElemnt}
          </div>

        </div>


        {/* news */}
        <div className='p-[50px] sm:px-[10px]'>

          <div className='w-full flex justify-center'>
            <p className='text-[35px] m-[10px] mt-0 font-headings flex self-center'>Nowości</p>
          </div>
          
          <div className='flex overflow-x-scroll'>
            {newsElemnt}
          </div>

        </div>


        {/* newsletter */}
        <div className='m-auto mb-[75px] w-full max-w-[600px]'>

          <div className='flex flex-col items-center'>
            <p className='text-[35px] font-headings'>Newsletter</p>
            <p className='text-[20px] mx-[10px] text-center'>Zapisz się na newsletter i dostawaj powiadomienia o nowościach</p>
          </div>
          
          <div className='flex my-[20px] mx-[10px]'>
              <input type='email' placeholder='Podaj swój email' className='w-full h-[50px] pl-[20px] text-[20px] border-solid border-2 border-[#F1EFEF] no-underline	outline-none'></input>
              <button className='w-[120px] h-[50px] text-[20px] bg-[#F1EFEF]'>Wyślij</button>
          </div>

        </div>

        <div className='w-[90%] mb-[100px] m-auto flex md:flex-col'>

          <a className='w-1/3 max-h-[520px] md:w-auto'>
            <Image className='w-full h-[500px] cursor-pointer efect' src={komoda}></Image>
            <p className='translate-y-[-100px] ml-[20px] text-[50px] text-[#fff]'>Komody</p>
          </a>
          <a className='w-1/3 max-h-[520px] md:w-auto'>
            <Image className='w-full h-[500px] cursor-pointer efect' src={biurka}></Image>
            <p className='translate-y-[-100px] ml-[20px] text-[50px] text-[#fff]'>Biurka</p>
          </a>
          <a className='w-1/3 max-h-[520px md:w-auto' >
            <Image className='w-full h-[500px] cursor-pointer efect' src={szafa}></Image>
            <p className='translate-y-[-100px] ml-[20px] text-[50px] text-[#fff]'>Szafy</p>
          </a>

        </div>

      </main>

    </>
  )
}
