import React, { useRef, useState } from "react";

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
  const [slideIndex, setSlideIndex] = useState(0);
  const handleNextSlide = () => {
    const index = slideIndex < movies.length - 1 ? slideIndex + 1:  0
    console.log(slideIndex);
    setSlideIndex(index);
};

  const handlePrevSlide = () => {
    return slideIndex > 0 ?  setSlideIndex(slideIndex - 1) : setSlideIndex(movies.length - 1)
  };

  return (
    <>
        {/* <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <button onClick={() => handlePrevSlide()} className="sliderArrow left">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="container">
                    <MovieSliderItem />
                    <MovieSliderItem />
                    <MovieSliderItem />
                    <MovieSliderItem />
                    <MovieSliderItem />
                    <MovieSliderItem />
                    <MovieSliderItem />
                    <MovieSliderItem />
                </div>
                <button onClick={() => handleNextSlide()}   className="sliderArrow right">
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
        </div> */}
        {/* <div className="movie-slider-container">
            <button onClick={handlePrevSlide}>
                <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="movie-slider">
                <div
                className="movie-slider-wrapper"
                >
                {movies.map((movie) => (
                    <div className="movie-card" key={movie.id}>
                    <div className="movie-card-img">
                        <img src={movie.img} alt={movie.title} className="h-32" />
                    </div>
                    <div className="movie-card-info">
                        <h3>{movie.title}</h3>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            <button onClick={handleNextSlide} className="ml-4">
                <span className="material-symbols-outlined">arrow_forward</span>
            </button>
        </div> */}
    </>
  );
};