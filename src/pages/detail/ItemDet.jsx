import React from 'react'
import Count from '../../components/unit/Count'

const ItemDet = ({array}) => {
    // fetch(url,{
    //     method
    // })
return (
    <div className='d-flex justify-content-sm-center flex-wrap p-2 flex-fill bd-highlight'>
        {array.map((item)=>{
            return (
                <div className='shadow-sm p-3 mb-5 bg-body rounded card text-center'>
                    <div className='card-header'>
                        <h2>{item?.title}</h2>
                    </div>
                    <div className="card-body ">
                        <img src={item?.image}/>  
                        <h5 className='card-title'>{item?.species} fjsdfkjdlsfjd</h5>
                        <p className='cardt-text'>{item?.status}</p>  
                    </div>
                {/* <span>{item?.origin.name}</span> */}
                {/* <p>{product?.precio}</p> */}

                </div>

            )
        })}
    </div>
)
}

export default ItemDet