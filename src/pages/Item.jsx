import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Item = ({ item }) => {

    useEffect(() => {
    //   console.log('olas')
    }, [])
    
    return (
        <article >
            
            <h2>{item.title}</h2>
            <img src={item.image}  />
            <p>Precio: ${item.price}</p>
            {/* <Link to={`/category/${item.id}`}>Ver detalle</Link> */}
        </article>

    )
}

export default Item