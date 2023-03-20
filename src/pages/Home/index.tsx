import { Carrousel } from '../../components/Carrousel';
import './index.css';

 export const Home = () => {
  return (
      <>
        <div className='flex items-center w-full justify-center p-8' id='home-wrapper'>
          <Carrousel />
        </div>
        <div className='flex flex-col items-center justify-center bg-blue-800 h-screen w-full'>
          <div className='grid grid-cols-3 gap-4'>
           
          </div> 
        </div>
        <div className='flex flex-col items-center justify-center w-full h-screen'>
          
        </div>
      </>
  )
}
