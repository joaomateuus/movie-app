import { useEffect, useState } from 'react';
import { Carrousel } from '../../components/Carrousel';
import { MovieSlider } from '../../components/MovieSlider';
import { swiperSettings } from '../../config/swiper';
import { TrendingService } from '../../services/TrendindService';
import { TrendingResponse } from '../../types/Trending';
import './index.css';

export const Home = () => {
  const [trendingResponse, setTrendingResponse] = useState<TrendingResponse>();
  
  const TrendingSliderProps = {
    title: "Trending",
    settings: swiperSettings,
    trendingMovies: trendingResponse?.results ?? []
  };

  const MovieSliderProps = {
    title: "Movie",
    settings: swiperSettings,
    trendingMovies: trendingResponse?.results ?? []
  };

  const SeriesSliderProps = {
    title: "Series",
    settings: swiperSettings,
    trendingMovies: trendingResponse?.results ?? []
  };
  
  useEffect(() => {
    async function fetchTrending() {
      const trendingResponse = await TrendingService();
      setTrendingResponse(trendingResponse);
    }
    fetchTrending();
  }, []);

  return (
    <>
      <div className='flex items-center w-full justify-center p-8' id='home-wrapper'>
        <Carrousel />
      </div>
      <div className='flex flex-col items-start justify-center bg-black p-12 overflow-hidden'id='home-container'>
        <div className='mb-6'>
          <MovieSlider {...TrendingSliderProps}/>
        </div>
        <div className='mb-6'>
          <MovieSlider {...MovieSliderProps}/>
        </div>
        <div className='mb-6'>
          <MovieSlider {...SeriesSliderProps}  />
        </div>
      </div>  
    </>
  )
}