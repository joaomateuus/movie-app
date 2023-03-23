import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

import { MovieSliderItem } from "./MovieSliderItem/index"
import "./index.scss";

interface Movie {
  id: number;
  title: string;
  subtitle: string;
  genre: string;
  img: string;
}

interface MovieSliderProps {
    movies: Movie[];
}

export const MovieSlider: React.FC<MovieSliderProps> = ({ movies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevSlide = () => {
        console.log(currentIndex)
        return currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(movies.length - 1) 
    }

    const handleNextSlide = () => {
        console.log(currentIndex)
        return currentIndex < movies.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0) 
    }


    return (
        <div className="slider">
            <button className="arrow-left" onClick={handlePrevSlide}>
                <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="slider-container">
                <div className="slider-item" style={{ transform: `translateX(-${currentIndex * 20.5}%)` }}>
                    {movies.map((movie, index) => {
                        return(
                            <img src={movie.img} key={index} alt="" />
                        )
                    })}
                </div>
            </div>
            <button className="arrow-right" onClick={handleNextSlide}>
                <span className="material-symbols-outlined">arrow_forward</span>
            </button>
        </div>
        // <div className="slider">
        //     <button className="">
        //         <span className="material-symbols-outlined">arrow_back</span>
        //     </button>
        //     <div className="slider-items">
        //         {movies.map((movie, index) => {
        //             return(
        //                 <div className="slider-item">
        //                     <img src={movie.img} alt="" />
        //                 </div>
        //             )
        //         })}
        //     </div>
        //     <button className="">
        //         <span className="material-symbols-outlined">arrow_forward</span>
        //     </button>
        // </div>
    //   <div className="NetflixSlider">
    //     <div className="NetflixSlider-controls">
    //       <button onClick={handlePrev}>Prev</button>
    //       <button onClick={handleNext}>Next</button>
    //     </div>
    //     <div className="NetflixSlider-items">{renderItems()}</div>
    //   </div>
    );
  };
  

