import { useEffect, useState } from 'react';
import { Carrousel } from '../../components/Carrousel';
import { MovieSlider } from '../../components/MovieSlider';
import { SwiperProps } from "swiper/react";
import './index.css';
import { TrendingService } from '../../services/TrendindService';
import { TrendingResponse } from '../../types/Trending';

export const Home = () => {
  const [trendingResponse, setTrendingResponse] = useState<TrendingResponse>();
  const settings: SwiperProps = {
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
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }
  };
  

  useEffect(() => {
    async function fetchTrending() {
      const trendingResponse = await TrendingService()
      setTrendingResponse(trendingResponse);
    }
    fetchTrending();
   
  }, [])
  
  return (
      <>
        <div className='flex items-center w-full justify-center p-8' id='home-wrapper'>
          <Carrousel />
        </div>
        <div className='flex flex-col items-start justify-center bg-black p-12 overflow-hidden'id='home-container'>
          <div className='mb-6'>
            <MovieSlider  settings={settings} trendingMovies={trendingResponse?.results ?? []}  title="Top 10 Brasil" />
          </div>
          <div className='mb-6'>
            <MovieSlider  settings={settings} trendingMovies={trendingResponse?.results ?? []}   title="Top filmes"/>
          </div>
          <div className='mb-6'>
            <MovieSlider  settings={settings} trendingMovies={trendingResponse?.results ?? []}  title="Top series" />
          </div>
        </div>
        {/* <div className='flex flex-col items-center justify-center w-full h-screen'>
          
        </div> */}
      </>
  )
}
