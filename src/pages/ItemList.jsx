import React, { useEffect } from 'react'
import Count from '../components/unit/Count'
import Item from './Item'


const ItemList = ({ items, isLoading }) => {
    const {image, price} = items
    useEffect(() => {
        // console.log(items)
    }, [])
    
    return (
        <section>
            {/* {isLoading &&  */}
            <>
            <h3>parados por aca</h3>
                {items.map((product) => {
                    return(
                            <div key={product.id}>
                                <Item  item={product}/>
                                <Count stock='4' initial='1'/>
                            </div>
                    )
                })}
            </>
        </section>
    )
}

export default ItemList