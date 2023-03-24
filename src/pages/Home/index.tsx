import { useEffect, useState } from 'react';
import { Carrousel } from '../../components/Carrousel';
import { MovieSlider } from '../../components/MovieSlider';
import wakanda from "../../assets/traillers/wakanda.webp";
import panico from "../../assets/traillers/panico.jpg";
import john_wick from "../../assets/traillers/john_wick.jpg";
import './index.css';
import { TrendingService } from '../../services/TrendindService';
import { TrendingResponse } from '../../types/Trending';

export const Home = () => {
  const [trendingResponse, setTrendingResponse] = useState<TrendingResponse>();

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
            <MovieSlider  trendingMovies={trendingResponse?.results ?? []}  title="Top 10 Brasil" />
          </div>
          <div className='mb-6'>
            <MovieSlider  trendingMovies={trendingResponse?.results ?? []}   title="Top filmes"/>
          </div>
          <div className='mb-6'>
            <MovieSlider  trendingMovies={trendingResponse?.results ?? []}  title="Top series" />
          </div>
        </div>
        {/* <div className='flex flex-col items-center justify-center w-full h-screen'>
          
        </div> */}
      </>
  )
}
