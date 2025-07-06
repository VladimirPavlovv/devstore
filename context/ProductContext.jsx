'use client'

import { createContext, useContext, useState } from "react"

const ProductContext = createContext()

export default function ProductsProvider(props) {
    const { children } = props

    const [cart, setCart] = useState({})

    function handleIncrementProduct(price_id, num, data, noIncrement=false) {
        const newCart = {
            ...cart
        }

        if (price_id in cart) {
            newCart[price_id] = {
                ...data,
                quantity: noIncrement ? num : newCart[price_id]?.quantity + num
            }
        } else {
            newCart[price_id] = {
                ...data,
                quantity: num
            }
        }

        if (parseInt(newCart[price_id].quantity) <= 0) {
            delete newCart[price_id]
        }

        setCart(newCart)
    }

    const value = {
        cart,
        handleIncrementProduct
    }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)