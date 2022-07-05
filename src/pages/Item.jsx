import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    return (
        <article >
            <h2>{item.nombre}</h2>
            <img src="https://picsum.photos/200/150"  />
            <p>Precio: ${item.id}</p>
            <Link to={`/item/${item.id}`}>Ver detalle</Link>
        </article>

    )
}

export default Item