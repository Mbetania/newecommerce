import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
<<<<<<< HEAD
import { NavBar } from '../components/shop/NavBar';
import ItemDetailContainer from '../pages/detail/ItemDetailContainer';
=======
import Calculator from '../components/unit/Calculator';
>>>>>>> calculator
import { Shop }  from '../pages/Shop';
import '../app.scss'

export const AppRoutes = () => {
return (
    <BrowserRouter>
        <Routes> 
<<<<<<< HEAD
            <Route path='/' element={<NavBar/>}>
                <Route path='shop' element={<Shop/>} />
                <Route path='producto' element={<ItemDetailContainer/>}/>
            </Route>
=======
            <Route path='/shop' element={<Shop/>} />
            <Route path='/calc' element={<Calculator/>}/>
>>>>>>> calculator
        </Routes>
    </BrowserRouter>
);
}


export default AppRoutes;
