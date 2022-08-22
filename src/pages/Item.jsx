import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Item = ({ item }) => {

    useEffect(() => {
    //   console.log('olas')
    }, [])

    //!FALTA CONDICIONAL DE CANT=== 0 Y CANT !=0
    
    return (
        <div className='d-flex flex-column' >
            <div className='d-flex justify-content-between'>
                <h2>{item.title}</h2>
            </div>
            <div className="mt-auto">
                <img src={item.image}  />
                <p>Precio: ${item.price}</p>
                <p>{item.id}</p>
                {/* <Link to={`/category/${item.id}`}>Ver detalle</Link> */}
            </div>
        </div>

    )
}

export default Item