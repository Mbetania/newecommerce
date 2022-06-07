import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    return (
        <article >
            <h2>{item.title}</h2>
            <p>Precio: ${item.price}</p>
        </article>
    )
}

export default Item