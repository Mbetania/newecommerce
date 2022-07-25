import React, { useEffect } from 'react'
import Item from './Item'


const ItemList = ({ items, isLoading }) => {
    useEffect(() => {
        const {image, price} = items
        console.log(items)
    }, [])
    
    return (
        <section>
            {/* {isLoading &&  */}
            <>
            <h3>parados por aca</h3>
                {items.map((item) => {
                    return <Item key={item.id} item={item.image} />
                })}
            </>
        </section>
    )
}

export default ItemList