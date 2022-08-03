import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getData, products } from '../../mocks/productos'
import ItemDet from './ItemDet'
import { db } from '../../firebase'
import { collection, getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [products, setCharactersList] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    // const url = 'https://rickandmortyapi.com/api/character'
    
    // const getCharacter= async(character) =>{
    //     setLoading(true)
    //     try{
    //         const result = await fetch(url)
    //         const characters = await result.json()
    //         setCharactersList(characters.results)
    //         console.table(characters.results)
    //     }catch(error){
    //         toast.error('error')
    //     }finally{
    //         setLoading(false)
    //     }
    // }
    useEffect(() => {
        const producCollection = collection(db, 'items')
        const refDoc = doc(producCollection, id)
        getDoc(refDoc)
            .then((resp) => {
                setCharactersList({
                    id: id,
                    ...resp.data()})
            })
        .catch((error) => {console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
        //const productCollection = collection(db, 'items')
        // const refDoc = doc(producCollection, productId)
        //getDoc(refDoc).then(result => {
            //setProduct(result.data())
            //!seguir la promesa
        // }) 

            // getCharacter()
    },[id])

    return(
        <div className='d-flex justify-content-evenly '>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
            <       ItemDet array={products}/>
                </>
            )}
        </div>
    )

// if (loading) {
//     return <h1>cagando..</h1>
// }else {
//     return {item.map((character)=> <ItemDet key={character.id} algo={character}/>)}
// }
}
export default ItemDetailContainer