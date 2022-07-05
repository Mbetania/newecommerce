import React from 'react'
import {getData} from '../mocks/productos'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
<<<<<<< HEAD
import { toast } from 'react-toastify'
import { useParams } from 'react-router'
// import { db } from '../firebase'
// import { collection, getDocs, query } from 'firebase/firestore'
=======
import { db } from '../firebase'
import { collection, getDocs, query, } from 'firebase/firestore'
>>>>>>> calculator

//getDocs, getDoc, collection, updateDoc, addDoc, query, where

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])

    const {idSection} = useParams()
    console.log(idSection)


    useEffect(() => {
        // console.log('me veo')
        toast.info('cargando cuadros')
        getData
            .then((result) => {toast.dismiss()
                setItems(result)})
            .catch((error) =>toast.error('Error al traer cuadros'))
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

    } , [idSection])

<<<<<<< HEAD
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
=======
            })
            .catch(()=>{
                console.error('error al cargar');
            })
            

    }, [])
    if (loading){
        return <h2>cargando</h2>
    } else{
        return <ItemList isLoading={loading} productos={items}/>
    }
>>>>>>> calculator

}
export default ItemListContainer