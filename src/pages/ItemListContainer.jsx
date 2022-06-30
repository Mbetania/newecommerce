import React from 'react'
import {getData} from '../mocks/productos'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
// import { db } from '../firebase'
// import { collection, getDocs, query } from 'firebase/firestore'

//getDocs, getDoc, collection, updateDoc, addDoc, query, where

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])


    useEffect(() => {
        console.log('me veo')
        getData
            .then((result) => {setItems(result)})
            .catch((error) =>console.log(error))
            .finally(()=> setLoading(false))
        // const itemsCollection = collection(db,"items")
        // const consulta = getDocs(itemsCollection)
        // const consulta = getDocs(query())
        // consulta
            // .then((resultado)=>{
                // resultado.docs.forEach((doc)=>{
                //     console.log(doc.data())
                //     setItems(doc.data())
                //     setLoading(false)
                //     return doc.data()
                // })
            //     const array_de_resultados = resultado.docs.map((doc)=>{
            //         return doc.data()              
            //     }
            //     setItems(array_de_resultados)
            //     setLoading(false)
            // })
            // .catch(()=>{
            //     console.error('error al cargar');
            // })    

    } , [])

    return(
        <>
        <h2>Hola!</h2>
        {loading?(
            <span>Loading...</span>
        ):(
            <ItemList items={items}/>
            )}
        </>
    )
    // if (loading){
    //     return <h1>cargando</h1>
    // } else{
    //     return <ItemList isLoading={loading} productos={items}/>
    // }

}
export default ItemListContainer