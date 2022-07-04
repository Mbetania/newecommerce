import React from 'react'
import Count from '../components/unit/Count'
import ItemListContainer from './ItemListContainer'


export const Shop = ({ onAdd }) => {
    return (
        <>
            <ItemListContainer />
            <Count stock={5} initial={1}/>

        </>
    )
}
