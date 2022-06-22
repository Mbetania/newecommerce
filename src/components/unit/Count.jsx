import React from 'react'
import { useState } from 'react'

const Count = ({miProp}) => {
    const [count, setCount] = useState(0)
    const handlerClick = (value) => {
        switch (value) {
            case "plus":
                return (count + value)
                break;
            case "subtract":
                return (count - value)
                break;
        }
        // setCount(count + value)
        
    }
return (
    <>
        <div>{miProp}</div>
        <h1>{numero}</h1>
        <button onClick={() => handlerClick(+1)}> Click </button>
    </>
)
}

export default Count