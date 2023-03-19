import { useState, useEffect, useRef, useCallback } from "react";
import wakanda from "../../assets/traillers/wakanda.webp";
import panico from "../../assets/traillers/panico.jpg";
import john_wick from "../../assets/traillers/john_wick.jpg";
import './index.css'

// interface CarrouselProps{
//     children: React.ReactNode;
// }; 

export const Carrousel = () => {
    const timerRef = useRef(0);
    const [activeImage, setActiveImage] = useState(0);

    const traillers = [
        {id: 1, name: 'Wakanda Forever', img: wakanda, genre: 'Action'},
        {id: 2, name: 'Panic', img: panico, genre: 'Thriller'},
        {id: 3, name: 'John Wick IV', img: john_wick, genre: 'Action'},
    ];

    const gettingPrev = (currentImage: number) => {
        const index = currentImage > 0 ? currentImage -1 : traillers.length -1;
        setActiveImage(index);
    };

    const gettingNext = useCallback((currentImage: number) => {
        const index = currentImage < traillers.length - 1 ? currentImage + 1 : 0;
        setActiveImage(index);
    }, [activeImage, traillers]);

    useEffect(() => {
        if(timerRef.current){
            clearTimeout(timerRef.current);
        } 
        timerRef.current = setTimeout(() => {
            gettingNext(activeImage);
        }, 5000);
        return () => clearTimeout(timerRef.current);
    }, [gettingNext]);

    return (
        <>
            <div className='flex items-center justify-center'>
                <div className="carrousel-buttons">
                    <button onClick={() => gettingPrev(activeImage)} className="button-arrow">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                </div>
                <div className="carrousel" style={{backgroundImage: `url(${traillers[activeImage].img})`}} />
                <div className="carrousel-buttons">
                    <button onClick={() => gettingNext(activeImage)} className="button-arrow">
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
                {/*
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
                */}
            </div>
        </>
    )   
};
