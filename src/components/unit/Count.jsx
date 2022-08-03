import React from 'react'
import { useState } from 'react'

const Count = ({miProp, stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const handlerClickAdd = () => {
        if (count<stock){
            setCount(count+1)
        }
    }
    const handlerClickSubtrack = () =>{
        if(count > 1){
            setCount(count-1)
        }
    }
return (
    <>
        <div>{miProp}</div>
        <h1>{count}</h1>
        <button onClick={handlerClickAdd}> + </button>
        <span>{count}</span>
        <button onClick={handlerClickSubtrack}> - </button>
    </>
)
}

export default Count