import React from 'react'
<<<<<<< HEAD
import Count from '../components/unit/Count'
import ItemListContainer from './ItemListContainer'


export const Shop = ({ onAdd }) => {
    return (
        <>
            <ItemListContainer />
            <Count stock={5} initial={1}/>

        </>
    )
=======
import { NavBar } from '../components/shop/NavBar'
import Count from '../components/unit/Calculator'
import ItemListContainer from './ItemListContainer'


export const Shop = () => {
return (
    <>
        <NavBar/>
        <ItemListContainer/>

    </>
)
>>>>>>> calculator
}
