import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { Shop }  from '../pages/Shop';

export const AppRoutes = () => {
return (
    <BrowserRouter>
        <Routes> 
            <Route path='/shop' element={<Shop/>} />
        </Routes>
    </BrowserRouter>
);
}


export default AppRoutes;
