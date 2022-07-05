import React from 'react'
// import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    return (
        <article >
            <h2>{item.nombre}</h2>
            <p>Precio: ${item.id}</p>
        </article>
        
    )
}

export default Item