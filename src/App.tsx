import './App.css';
import { NavBar } from './components/Navbar';
import { AppRoutes } from './routes';

function App() {
  return (
    <>
      <NavBar placeholder="Search any movie or Tv show" />
      <AppRoutes />
    </>
  )
}

export default App
