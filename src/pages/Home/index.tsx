import { Carrousel } from '../../components/Carrousel';
import './index.css';
export const Home = () => {
  return (
    <div className='flex-col items-center w-full justify-center bg-green-800' id='home-wrapper'>
        <div className='ml-40'>
          <Carrousel />
        </div>
        {/* <div className='bg-blue-300'>
          <h1 className='text-4xl'>Melhores Comédia</h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div>
          <h1 className='text-4xl'>Melhores Sci-Fi</h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div> */}
      </div>    
  )
}
