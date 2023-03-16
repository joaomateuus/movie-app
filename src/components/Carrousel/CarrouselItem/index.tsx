import { Traillers }from "../../../types/Traillers";
import './index.css';

interface CarrouselItemProps {
  movies: Traillers;
  key: number;
  children: React.ReactNode
};

export const CarrouselItem = ({movies, children}: CarrouselItemProps) => {
  return (
   <>
    <div className="carrousel-item">
      <img className="carrousel-img" src={movies.img} alt="" />
      <div className="carrousel-description">
        <h1>asdasdasd</h1>
      </div>
    </div>
   </>
  )
}
