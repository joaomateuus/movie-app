import { Carrousel } from '../../components/Carrousel';
import './index.css';
export const Home = () => {
  return (
      <>
        <div className='flex items-center w-full justify-center p-12' id='home-wrapper'>
          <Carrousel />
        </div>
        <div className='flex flex-col items-center justify-center bg-blue-800 h-screen w-full'>
          <h1>OLA</h1>
          <h1>OLA</h1>
          <h1>OLA</h1>
          <h1>OLA</h1>
        </div>

      </>
     
       
  
  )
}
