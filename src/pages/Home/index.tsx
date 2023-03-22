import { Carrousel } from '../../components/Carrousel';
import { MovieSlider } from '../../components/MovieSlider';
import wakanda from "../../assets/traillers/wakanda.webp";
import panico from "../../assets/traillers/panico.jpg";
import john_wick from "../../assets/traillers/john_wick.jpg";
import './index.css';

export const Home = () => {
  const movies = [
    {id: 1, title: 'Wakanda Forever', subtitle:' Chapter 3 - Parabellum', img: wakanda, genre: 'Ação | Suspense - 2h 12min'},
    {id: 2, title: 'Panic', subtitle:' Chapter 3 - Parabellum', img: panico, genre: 'Thriller'},
    {id: 3, title: 'John Wick: ', subtitle:' Chapter 3 - Parabellum', genre: 'Ação | Suspense - 2h 12min', img: john_wick},
    {id: 4, title: 'Wakanda Forever', subtitle:' Chapter 3 - Parabellum', img: wakanda, genre: 'Ação | Suspense - 2h 12min'},
    {id: 5, title: 'Panic', subtitle:' Chapter 3 - Parabellum', img: panico, genre: 'Thriller'},
    {id: 6, title: 'John Wick: ', subtitle:' Chapter 3 - Parabellum', genre: 'Ação | Suspense - 2h 12min', img: john_wick},
    {id: 7, title: 'Wakanda Forever', subtitle:' Chapter 3 - Parabellum', img: wakanda, genre: 'Ação | Suspense - 2h 12min'},
    {id: 8, title: 'Panic', subtitle:' Chapter 3 - Parabellum', img: panico, genre: 'Thriller'},
    {id: 9, title: 'John Wick: ', subtitle:' Chapter 3 - Parabellum', genre: 'Ação | Suspense - 2h 12min', img: john_wick},
    {id: 10, title: 'Wakanda Forever', subtitle:' Chapter 3 - Parabellum', img: wakanda, genre: 'Ação | Suspense - 2h 12min'},
    {id: 11, title: 'Panic', subtitle:' Chapter 3 - Parabellum', img: panico, genre: 'Thriller'},
    {id: 12, title: 'John Wick: ', subtitle:' Chapter 3 - Parabellum', genre: 'Ação | Suspense - 2h 12min', img: john_wick},
    {id: 13, title: 'Wakanda Forever', subtitle:' Chapter 3 - Parabellum', img: wakanda, genre: 'Ação | Suspense - 2h 12min'},
    {id: 14, title: 'Panic', subtitle:' Chapter 3 - Parabellum', img: panico, genre: 'Thriller'},
    {id: 15, title: 'John Wick: ', subtitle:' Chapter 3 - Parabellum', genre: 'Ação | Suspense - 2h 12min', img: john_wick},
    {id: 16, title: 'Wakanda Forever', subtitle:' Chapter 3 - Parabellum', img: wakanda, genre: 'Ação | Suspense - 2h 12min'},
    {id: 17, title: 'Panic', subtitle:' Chapter 3 - Parabellum', img: panico, genre: 'Thriller'},
    {id: 18, title: 'John Wick: ', subtitle:' Chapter 3 - Parabellum', genre: 'Ação | Suspense - 2h 12min', img: john_wick},
  ];
  
  return (
      <>
        <div className='flex items-center w-full justify-center p-8' id='home-wrapper'>
          <Carrousel />
        </div>
        <div className='flex flex-col items-start justify-center bg-blue-800 p-12 overflow-hidden'>
          <div className='first-carrouse'>
            <h1 className='text-2xl text-white mb-4'>Em alta</h1>
            <MovieSlider  movies={movies} />
          </div>
          <div className='mb-6'>
            <h1 className='text-2xl text-white mb-4'>Top 10 Brasil</h1>
            <MovieSlider  movies={movies} />
          </div>
          <div className='mb-6'>
            <h1 className='text-2xl text-white mb-4'>Top filmes</h1>
            <MovieSlider  movies={movies} />
          </div>
          <div className='mb-6'>
            <h1 className='text-2xl text-white mb-4'>Top series</h1>
            <MovieSlider  movies={movies} />
          </div>
        </div>
        {/* <div className='flex flex-col items-center justify-center w-full h-screen'>
          
        </div> */}
      </>
  )
}
