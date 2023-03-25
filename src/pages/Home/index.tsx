import { useEffect, useState } from 'react';
import { Carrousel } from '../../components/Carrousel';
import { MovieSlider } from '../../components/MovieSlider';
import { swiperSettings } from '../../config/swiper';
import { TrendingService, popularMoviesService, popularSeriesService } from '../../services/TrendindService';
import { MovieDbApiResponse } from '../../types/Trending';
import './index.css';

export const Home = () => {
  const [trendingResponse, setTrendingResponse] = useState<MovieDbApiResponse>();
  const [popularMoviesResponse, setpopularMoviesResponse] = useState<MovieDbApiResponse>();
  const [popularSeriesResponse, setPopularSeriesResponse] = useState<MovieDbApiResponse>();
  
  useEffect(() => {
    async function fetchTrending() {
      const fetchTrendingResponse = await TrendingService();
      setTrendingResponse(fetchTrendingResponse);
    }
    async function fetchPopularMovies() {
      const fetchPopularMoviesResponse = await popularMoviesService();
      setpopularMoviesResponse(fetchPopularMoviesResponse);
    }
    async function fetchPopularSeries() {
      const fetchPopularMoviesResponse = await popularSeriesService();
      setPopularSeriesResponse(fetchPopularMoviesResponse);
    }
    fetchTrending();
    fetchPopularMovies();
    fetchPopularSeries();
  }, []);
  
  const TrendingSliderProps = {
    title: "Trending",
    settings: swiperSettings,
    movies: trendingResponse?.results ?? []
  };

  const MovieSliderProps = {
    title: "Popular Movies",
    settings: swiperSettings,
    movies: popularMoviesResponse?.results.splice(0, 9) ?? [],
    redirectUrl: "/movies"
  };

  const SeriesSliderProps = {
    title: "Popular Series",
    settings: swiperSettings,
    movies: popularSeriesResponse?.results.splice(0, 10) ?? [],
    redirectUrl: "localhost:3000"
  };

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