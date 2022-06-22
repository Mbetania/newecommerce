import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { db } from '../firebase'
import { collection, getDocs, query, } from 'firebase/firestore'

//getDocs, getDoc, collection, updateDoc, addDoc, query, where

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const itemsCollection = collection(db,"items")
        const consulta = getDocs(itemsCollection)
        // const consulta = getDocs(query())
        consulta
            .then((resultado)=>{
                // resultado.docs.forEach((doc)=>{
                //     console.log(doc.data())
                //     setItems(doc.data())
                //     setLoading(false)
                //     return doc.data()
                // })
                const array_de_resultados = resultado.docs.map((doc)=>{
                    return doc.data()
                    
                })

                setItems(array_de_resultados)
                setLoading(false)

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

}
export default ItemListContainer