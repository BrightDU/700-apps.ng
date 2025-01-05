'use client';

export const Gallery = () => {
    return (
        <section className='mt-24 md:mt-[173px]' id='gallery'>
            <h2 className='text-[30px]/[32px] font-bold text-[#4D4D4D] mb-[64px] text-center'>Gallery</h2>
            <ImageCarousel />
        </section>
    );
}



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

const ImageCarousel = () => {
  const images = [
    '/assets/gallery1.png', // Replace with your image paths
    '/assets/gallery2.png',
    '/assets/gallery3.png',
    '/assets/gallery4.png',
    '/assets/gallery5.png',
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      spaceBetween={60}
      initialSlide={2}
      coverflowEffect={{
        rotate: 0,
        stretch: 50,
        depth: 150, 
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      className="image-carousel"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
