import { SwiperProps } from "swiper/react";

export const swiperSettings: SwiperProps = {
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: true,
    freeMode: false,
    navigation: true,
    loop: true,
    pagination: {
      clickable: false 
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }
  };