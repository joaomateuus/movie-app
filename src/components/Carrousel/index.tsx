import { useState, useEffect } from "react";
import wakanda from "../../assets/traillers/wakanda.jpg";
import panico from "../../assets/traillers/panico.jpg"
import john_wick from "../../assets/traillers/john_wick.jpg"
import { CarrouselItem } from "./CarrouselItem";
import './index.css'

export const Carrousel = () => {
    const [activeImage, setActiveImage] = useState(0);

    // useEffect(() => {
    //     setInterval (()=>{
    //         gettingNext(activeImage);
    //     }, 10000);
    // });

    const traillers = [
        {id: 1, name: 'Wakanda Forever', img: wakanda, genre: 'Action'},
        {id: 2, name: 'Panic', img: panico, genre: 'Thriller'},
        {id: 3, name: 'John Wick IV', img: john_wick, genre: 'Action'},
    ];

    const gettingPrev = (currentImage: number) => {
        const index = currentImage > 0 ? currentImage -1 : traillers.length -1;
        setActiveImage(index);
    };

    const gettingNext = (currentImage: number) => {
        const index = currentImage < traillers.length - 1 ? currentImage + 1 : 0;
        setActiveImage(index);
    };

    return (
        <>
            <div className='carrousel'>
                <div className="inner" style={{transform: `translate(-${activeImage * 100}%)`}}>
                    {traillers.map((movie, index)=> {
                        return (
                                <CarrouselItem key={index} movies={movie}>
                                    <div className="carrousel-description">
                                        <h1 className="text-2xl text-green-300">Ola TRailer</h1>
                                    </div>

                                </CarrouselItem>
                            )
                    })}
                </div>
                <div className="carrousel-buttons">
                    <button onClick={() => gettingPrev(activeImage)} className="button-arrow">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <button onClick={() => gettingNext(activeImage)} className="button-arrow">
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </div>
        </>
    )   
};
