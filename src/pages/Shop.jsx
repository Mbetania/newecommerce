import React from 'react'
import { NavBar } from '../components/shop/NavBar'
import Count from '../components/unit/Count'
import ItemListContainer from './ItemListContainer'


export const Shop = () => {
return (
    <>
        <NavBar/>
        <ItemListContainer/>
        <Count stock = {5}/>
    </>
)
}
