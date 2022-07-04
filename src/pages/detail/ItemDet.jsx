import React from 'react'
import Count from '../../components/unit/Count'

const ItemDet = ({array}) => {
return (
    <div>
        {array.map((item)=>{
            return (
                <>
                <h2>{item?.name}</h2>
                <p>{item?.species}</p>
                <span>{item?.origin.name}</span>
                <img src={item?.image}  />
                {/* <p>{product?.precio}</p> */}
                <Count stock={5} initial={1}/>
                </>
            )
        })}
    </div>
)
}

export default ItemDet