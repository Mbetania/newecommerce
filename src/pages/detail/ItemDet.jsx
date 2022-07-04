import React from 'react'

const ItemDet = ({array}) => {
return (
    <div>
        {array.map((item)=>{
            return (
                <>
                <h2>{item?.name}</h2>
                <img src="https://picsum.photos/300/150"  />
                {/* <p>{product?.precio}</p> */}
                </>
            )
        })}
    </div>
)
}

export default ItemDet