import React from 'react'
import {getData, products} from '../mocks/productos'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { toast } from 'react-toastify'
import { useParams } from 'react-router'
import { db } from '../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
// console.log(db)
//getDocs, getDoc, collection, updateDoc, addDoc, query, where

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
    let producstConsult;
    // console.log(categoryId)

    useEffect(() => {
        // nombre igual al que le dimos a la coleccion
        const productsCollection = collection(db, 'items') 
        console.log(categoryId)
        if(categoryId){
            const productsQuery = query(
                productsCollection,
                where('category', '==', categoryId)
            )
            producstConsult = productsQuery
            console.log(producstConsult)
        }

        else{
            producstConsult = productsCollection
        }
        getDocs(producstConsult)
        .then((res) =>{
            const listProducts = res.docs.map((product) =>{
                return {
                    id: product.category,
                    ...product.data()
                }
            })
            setItems(listProducts)
            console.log(listProducts)
            })
            .catch((error) =>{
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })

    }, [categoryId])

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