import React from 'react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Count from '../../components/unit/Count'
import { products } from '../../mocks/productos'
import { consumeApi } from '../../services/shared/rest.service'
// import { getData } from '../../mocks/productos'
// import { consumeApi } from '../../services/shared/rest.service'
import ItemDet from './ItemDet'
//import { db } from '../firebase'
//import { collection, getDocs, query } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [characterList, setCharactersList]= useState([])
    const [loading, setLoading] = useState(true)
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
        //const productCollection = collection(db, 'items')
        // const refDoc = doc(producCollection, productId)
        //getDoc(refDoc).then(result => {
            //setProduct(result.data())
            //!seguir la promesa
        // }) 

            getCharacter()
    },[])

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