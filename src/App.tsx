import './App.css';
import { NavBar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { AppRoutes } from './routes';

function App() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <NavBar placeholder="Search any movie or Tv show" />
      <AppRoutes />
    </div>
  )
}

export default App
