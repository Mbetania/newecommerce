import React from 'react'
import Item from './Item'


const ItemList = ({ items, isLoading }) => {
    return (
        <section>
            {/* {isLoading &&  */}
            <>
                {items.map((item) => {
                    return <Item key={item.id} item={item} />
                })}
            </>
        </section>
    )
}

export default ItemList