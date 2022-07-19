import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { toast } from 'react-toastify'
import { getData, products } from '../../mocks/productos'
import { consumeApi } from '../../services/shared/rest.service'
// import { consumeApi } from '../../services/shared/rest.service'
import ItemDet from './ItemDet'
//import { db } from '../firebase'
//import { collection, getDocs, query } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [characterList, setCharactersList] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const url = 'https://rickandmortyapi.com/api/character'
    
    const getCharacter= async(character) =>{
        setLoading(true)
        try{
            const result = await fetch(url)
            const characters = await result.json()
            setCharactersList(characters.results)
            console.table(characters.results)
        }catch(error){
            toast.error('error')
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        setCharactersList(true)
        getData(id)
        .then((resp) => setCharactersList(resp))
        .catch((error) => console.log('error'))
        .finally(() => setLoading(false))
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
            <ItemDet array={characterList}/>
        </div>
    )

// if (loading) {
//     return <h1>cagando..</h1>
// }else {
//     return {item.map((character)=> <ItemDet key={character.id} algo={character}/>)}
// }
}
export default ItemDetailContainer