import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Calculator from '../components/unit/Calculator';
import { Shop }  from '../pages/Shop';

export const AppRoutes = () => {
return (
    <BrowserRouter>
        <Routes> 
            <Route path='/shop' element={<Shop/>} />
            <Route path='/calc' element={<Calculator/>}/>
        </Routes>
    </BrowserRouter>
);
}


export default AppRoutes;
