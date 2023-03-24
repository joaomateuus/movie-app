import React, { useRef, useState, useEffect } from "react";
import "./index.scss";
import { Trending } from "../../types/Trending";

interface MovieSliderProps {
    title: string;
    trendingMovies: Array<Trending>;
}

export const MovieSlider: React.FC<MovieSliderProps> = ({ trendingMovies, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevSlide = () => {
        return currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(trendingMovies.length - 1) 
    }

    const handleNextSlide = () => {
        return currentIndex < trendingMovies.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0) 
    }

    return (
        <div className="flex flex-col items-start justify-center">
            <h1 className='text-2xl text-white mb-4'>{title}</h1>
            <div className="slider">
                <button className="h-8 bg-white rounded-lg" onClick={handlePrevSlide}>
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="slider-container">
                    <div className="slider-item" style={{ transform: `translateX(-${currentIndex * 6.5}%)` }}>
                        {trendingMovies.map((movie, index) => {
                            return(
                                <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} key={index} alt="" />
                            )
                        })}
                    </div>
                </div>
                <button className="h-8 bg-white rounded-full" onClick={handleNextSlide}>
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
        </div>
    );
  };
  

