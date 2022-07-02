import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Count from '../components/unit/Count';
import { Shop }  from '../pages/Shop';

export const AppRoutes = () => {
return (
    <BrowserRouter>
        <Routes> 
            <Route path='/shop' element={<Shop/>} />
            <Route path='/calc' element={<Count/>}/>
        </Routes>
    </BrowserRouter>
);
}


export default AppRoutes;
