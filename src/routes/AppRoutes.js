import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { NavBar } from '../components/shop/NavBar';
import ItemDetailContainer from '../pages/detail/ItemDetailContainer';
import { Shop }  from '../pages/Shop';
import '../app.scss'
import Calculator from '../components/unit/Calculator';

export const AppRoutes = () => {
return (
    <BrowserRouter>
        <Routes> 
            <Route path='/*' element={<NavBar/>}>
                <Route path='category' element={<Shop/>} />
                <Route path='producto' element={<ItemDetailContainer/>}/>
                <Route path='shop' element={<Calculator/>} />
            </Route>
        </Routes>
    </BrowserRouter>
);
}


export default AppRoutes;
