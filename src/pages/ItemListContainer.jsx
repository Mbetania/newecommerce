import React from 'react'
import Data from '../mocks/productos'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
// import { db } from '../firebase'
// import { collection, getDocs, query } from 'firebase/firestore'

//getDocs, getDoc, collection, updateDoc, addDoc, query, where

const ItemListContainer = () => {
    // const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])


    useEffect(() => {
        const api = 'mocks/productos.json'

        const fetchData = async() => {
                try{
                    // const response = await fetch(api)
                    const response = Data
                    // const json = await response.json()
                    setItems(response)
                    // setItems(json)
                }catch(error){
                    console.log('error')
                }
        }
        fetchData()
        // console.log('me veo')
        // getData
        //     .then((result) => {setItems(result)})
        //     .catch((error) =>console.log(error))
        //     .finally(()=> setLoading(false))
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

    } , [items])

    return(
        <>
        <h2>Hola!</h2>
        <ItemList items={items}/>
        {/* {loading?(
            <span>Loading...</span>
        ):( */}
            {/* )} */}
        </>
    )
    // if (loading){
    //     return <h1>cargando</h1>
    // } else{
    //     return <ItemList isLoading={loading} productos={items}/>
    // }

}
export default ItemListContainer