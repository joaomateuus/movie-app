import "./index.scss";
import { MovieModelBase } from "../../types/Trending";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface MovieSliderProps {
    title: string;
    settings: SwiperProps;
    movies: Array<MovieModelBase>;
    redirectUrl?: string;
};

export const MovieSlider: React.FC<MovieSliderProps> = ({ title, movies, settings, redirectUrl}) => {
    return (
        <div className="flex-col items-center justify-center trending-movies ml-12 p-6">
            <div className="flex items-center justify-between w-full p-4">
                <h1 className='text-2xl text-white mb-4'>{title}</h1>
                {redirectUrl ? 
                    <button className="h-8 w-32 bg-white rounded-md">Read More</button>
                    : null
                }
            </div>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <Swiper modules={[Navigation, Pagination]} {...settings}>
                        {movies.map((movie, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="swiper-movie-poster">
                                        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                                        <div className="overlay text-white">
                                            <div className="flex-col items-start justify-between p-6 h-full">
                                                <h2 className="text-xl text-white text-bold mb-4">{movie?.title ?? movie.original_title}</h2>
                                                <p className="text-justify text-sm text-bold mb-4">{movie.overview}</p>
                                                <button className="h-8 w-32 rounded-md bg-white text-black">Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                     </Swiper>
                </div>
            </div>
        </div>
    );
};
  

