import './App.css';
import { NavBar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { AppRoutes } from './routes';

function App() {
  return (
    <>
      <NavBar placeholder="Search any movie or Tv show">
        <div className=''>
          {/* <Sidebar /> */}
          <AppRoutes />
        </div>
      </NavBar>
    </>
  )
}

export default App
