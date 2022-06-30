import React from 'react'
import { NavBar } from '../components/shop/NavBar'
import Count from '../components/unit/Count'
import ItemListContainer from './ItemListContainer'


export const Shop = ({onAdd}) => {
return (
    <>
        <NavBar/>
        <ItemListContainer/>
        <Count stock = {5} initial={1} onAdd= {onAdd} />
    </>
)
}
