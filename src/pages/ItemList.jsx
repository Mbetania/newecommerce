import { Button } from 'bootstrap';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import Count from '../components/unit/Count'
import { MyProvider } from '../context/MyProvider';
import Item from './Item'


const ItemList = ({ items, isLoading }) => {
    const [prodAdded, setProdAdded] = useState(false)
    const {addCartProduct} = useContext(MyProvider)

    const onAdd = (count) => {
        addCartProduct({ ...items, quantity: count})
        setProdAdded(true)
    }


    const quantity = 1;

    useEffect(() => {
        // console.log(items)
    }, [])


    return (
        <section>
            {/* {isLoading &&  */}
            <>
                <h3>parados por aca</h3>
                {items.map((product) => {
                    return (
                        <div key={product.id}>
                            <Item item={product} />
                            {quantity === 0 ?
                                <button  className='btn btn-outline-info w-40'>+ Add To Cart</button>
                                :<Count stock={4} initial={1} onAdd={onAdd} />
                            }
                        </div>
                    )
                })}
            </>
        </section>
    )
}

export default ItemList