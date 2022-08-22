import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { NavBar } from '../components/shop/NavBar';
import ItemDetailContainer from '../pages/detail/ItemDetailContainer';
import { Shop }  from '../pages/Shop';
import '../app.scss'
import Calculator from '../components/unit/Calculator';
import { CartProvider } from '../context/MyProvider';
import ItemListContainer from '../pages/ItemListContainer';

export const AppRoutes = () => {
return (
    <BrowserRouter>
    <CartProvider>
        <NavBar/>
        <Routes> 
            <Route path='/*' element={<ItemListContainer/>}>
                <Route path='category/:categoryId' element={<ItemListContainer/>} />
                <Route path='detail/:id' element={<ItemDetailContainer/>}/>
                <Route path='shop' element={<Calculator/>} />
            </Route>
        </Routes>
    </CartProvider>
    </BrowserRouter>
);
}


export default AppRoutes;
