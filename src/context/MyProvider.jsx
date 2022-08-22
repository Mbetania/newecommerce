import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const MyProvider = createContext();
const { Appcontext } = MyProvider;


export const CartProvider = ({children}) => {
    const [productsCart, setProductsCart] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);
    const [totalProducst, setTotalProducts] = useState(0)

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('carrito'));
        console.log(localData)
        setProductsCart(localData)
    }, [])


    const handleAddProduct = (items) => {
        const ProductExist = productsCart.find((item) => item.id === items.id)
        if (ProductExist) {
            const formattedCart = (productsCart.map((item) => item.id === items.id ?
            { ...ProductExist, quantity: ProductExist.quantity + 1 } : item))
            setProductsCart(formattedCart);
            console.log(productsCart)
            } else {
                setProductsCart([...productsCart, { ...items, quantity: 1 }])
            }
            }

    return (
        <MyProvider.Provider
            value={{
            handleAddProduct
            }}>
            {children}
        </MyProvider.Provider>
    )
};





