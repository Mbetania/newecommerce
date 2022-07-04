import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { NavBar } from '../components/shop/NavBar';
import ItemDetailContainer from '../pages/detail/ItemDetailContainer';
import { Shop }  from '../pages/Shop';

export const AppRoutes = () => {
return (
    <BrowserRouter>
        <Routes> 
            <Route path='/' element={<NavBar/>}>
                <Route path='shop' element={<Shop/>} />
                <Route path='producto' element={<ItemDetailContainer/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
}


export default AppRoutes;
