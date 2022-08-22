import React from 'react'
import { useState } from 'react'

const Count = ({ miProp, stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)
    const handlerClickAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const handlerClickSubtrack = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <>
            <div className='d-flex align-items-center flex-column' style={{ gap: ".5rem"}}>
                <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem"}}>
                    <button className='btn btn-outline-info' onClick={handlerClickAdd}> + </button>
                    <div>
                        <span className='fs-3'>{count}</span> in cart
                    </div>
                    <button className='btn btn-outline-info' onClick={handlerClickSubtrack}> - </button>
                </div>
                <button className='btn btn-outline-danger' >Remove</button>
                <button onClick={() => onAdd(count)} className='btn btn-outline-info w-40'>+ Add To Cart</button>
            </div>
        </>
    )
}

export default Count