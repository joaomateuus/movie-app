import { useState, useEffect, useRef, useCallback } from "react";
import wakanda from "../../assets/traillers/wakanda.webp";
import panico from "../../assets/traillers/panico.jpg";
import john_wick from "../../assets/traillers/john_wick.jpg";
import "./index.css";

// interface CarrouselProps{
//     children: React.ReactNode;
// }; 

export const Carrousel = () => {
    const timerRef = useRef(0);
    const [activeImage, setActiveImage] = useState(0);

    const traillers = [
        {id: 1, title: 'Wakanda Forever', subtitle:' Chapter 3 - Parabellum', img: wakanda, genre: 'Ação | Suspense - 2h 12min'},
        {id: 2, title: 'Panic', subtitle:' Chapter 3 - Parabellum', img: panico, genre: 'Thriller'},
        {id: 3, title: 'John Wick: ', subtitle:' Chapter 3 - Parabellum', genre: 'Ação | Suspense - 2h 12min', img: john_wick},
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
        if(timerRef.current !== 0){
            clearTimeout(timerRef.current);
        } 
        timerRef.current = setTimeout(() => {
            gettingNext(activeImage);
        }, 8000);
        return () => clearTimeout(timerRef.current);
    }, [gettingNext]);

    return (
        <>
            <div className='flex items-center justify-center'>
                {/* <div className="carrousel-buttons">
                    <button onClick={() => gettingPrev(activeImage)} className="button-arrow">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                </div> */}
                <div className="carrousel" style={{backgroundImage: `url(${traillers[activeImage].img})`}}>
                    <div className="flex flex-col items-start justify-start text-bold p-4">
                        <span className="text-xl text-gray-300">Destaques</span>
                        <span className="text-5xl text-white ml-4">{traillers[activeImage].title}</span>
                        <span className="text-4xl text-white ml-4">{traillers[activeImage].subtitle}</span>
                        <span className="text-3xl text-white ml-4">{traillers[activeImage].genre}</span>
                        <span className="text-xl text-white">Veja o trailler</span>
                    </div>
                </div>
                {/* <div className="carrousel-buttons">
                    <button onClick={() => gettingNext(activeImage)} className="button-arrow">
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div> */}
            </div>
        </>
    )   
};
