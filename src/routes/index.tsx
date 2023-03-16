
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Movies } from '../pages/Movies'


export const AppRoutes: React.FC = () => {
   return(
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movies' element={<Movies />} />
    </Routes>
    )
}