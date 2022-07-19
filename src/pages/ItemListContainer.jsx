import React from 'react'
import {getData, products} from '../mocks/productos'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { toast } from 'react-toastify'
import { useParams } from 'react-router'
import { db } from '../firebase'
import { collection, getDocs, query } from 'firebase/firestore'

//getDocs, getDoc, collection, updateDoc, addDoc, query, where

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
    console.log(categoryId)

    //useEffet(() => {
    //const productCollection = collection(db, 'items') nombre igual al que le dimos a la coleccion
    //const q = query(productCollection), where('category', '==', 'nombre de la categoria')
    //haciendo la linea 21 reemplazamo en getDocs(q) y traemos filtrada la categoria
    //getDocs(productCollection)
    //.then(result => {
        //const lista = result.docs.map(item =>{
            //return {id: product.id,
        //...products.data()}
        // })
        //!seguir con la promesa
        //setProducts(lista)
    // })

        // const url = categoryID
        // ? `links/products/category/${categoryId}`
        // : `link/products`
        //fetch(URL)//
    // })

    useEffect(() => {
        // console.log('me veo')
        setLoading(true)
        toast.info('cargando cuadros')
        getData(categoryId)
            .then((result) => {toast.dismiss()
                console.log(result)
                setItems(result)})
            .catch((error) =>console.error('Error al traer cuadros'))
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

    } , [categoryId])

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