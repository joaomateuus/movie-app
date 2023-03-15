
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from '../pages/Home'


export const AppRoutes: React.FC = () => {
   return(
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
    )
}